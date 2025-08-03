// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type CodeStats = { languages: { [language: string]: { xps: number } } };
type CodeStatsMap = { languages: { language: string; xps: number }[] };

const fetchData: (user: string) => Promise<CodeStatsMap> = async (
  user: string
) => {
  // if (localStorage.getItem(user)) {
  //   return JSON.parse(localStorage.getItem("data") || "");
  // }
  let mappedData;
  try {
    const response = await fetch("https://codestats.net/api/users/" + user);
    const data: CodeStats = await response.json();
    mappedData = {
      languages: Object.keys(data.languages).map((language) => ({
        language,
        xps: data.languages[language].xps,
      })),
    };
    // localStorage.setItem(user, JSON.stringify(mappedData));
  } catch (e) {
    mappedData = {
      languages: [],
    };
  }
  return mappedData;
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  let { count } = _req.query;
  const { user } = _req.query;
  if (!user) {
    throw new Error("No user provided");
  }
  if (!count) {
    count = "5";
  }
  const data = await fetchData(user.toString());

  if (!data) {
    throw new Error("No data");
  }
  const sortedData = data.languages.sort((a, b) => b.xps - a.xps);
  const topLanguages = sortedData.slice(0, parseInt(count.toString()));
  const topLanguagesNames = topLanguages.map((language) => language.language);
  const topLanguagesXps = topLanguages.map((language) => language.xps);
  const topLanguagesXpsPercentage = topLanguagesXps.map((xps) =>
    Math.round((xps / topLanguages.reduce((a, b) => a + b.xps, 0)) * 100)
  );
  const topLanguagesXpsPercentageString = topLanguagesXpsPercentage.map(
    (xpsPercentage) => `${xpsPercentage}%`
  );
  const topLanguagesXpsString = topLanguagesXps.map((xps) => `${xps} XP`);
  const topLanguagesXpsPercentageStringWithCommas =
    topLanguagesXpsPercentageString.map((xpsPercentage) => `${xpsPercentage}`);
  const topLanguagesXpsStringWithCommas = topLanguagesXpsString.map(
    (xps) => `${xps}`
  );
  const topLanguagesXpsStringWithCommasAndPercentage =
    topLanguagesXpsStringWithCommas.map(
      (xps, index) =>
        `${xps} (${topLanguagesXpsPercentageStringWithCommas[index]})`
    );
  const topLanguagesXpsStringWithCommasAndPercentageAndNames =
    topLanguagesXpsStringWithCommasAndPercentage.map(
      (xps, index) => `${topLanguagesNames[index]}: ${xps}`
    );
  const languages = topLanguagesNames;
  const percentages = topLanguagesXpsPercentage;

  // create dynamic colors based on count
  const colors = [];
  for (let i = 0; i < topLanguages.length; i++) {
    const color = `hsl(${Math.round(
      (i / topLanguages.length) * 360
    )}, 100%, 50%)`;
    colors.push(color);
  }

  const labelColorCallback =
    "function(context) { const color = context.dataset.backgroundColor[context.dataIndex]; const match = color.match(/hsl\\(\\s*\\d+\\s*,\\s*\\d+%\\s*,\\s*(\\d+)%\\s*\\)/); if (match) { const lightness = parseInt(match[1], 10); return lightness >= 50 ? 'black' : 'white'; } return 'white'; }";

  const cartProperties = {
    type: "outlabeledPie",
    data: {
      datasets: [
        {
          backgroundColor: colors,
          data: percentages,
        },
      ],
      labels: languages,
    },
    options: {
      rotation: -90,
      plugins: {
        legend: false,
        outlabels: {
          text: "%l %p",
          color: labelColorCallback,
          font: {
            resizable: true,
            minSize: 12,
            maxSize: 18,
          },
        },
      },
    },
  };

  res.setHeader("Content-Type", "image/svg+xml");
  res.redirect(
    `https://quickchart.io/chart?c=${encodeURIComponent(
      JSON.stringify(cartProperties)
    )}`
  );
}
