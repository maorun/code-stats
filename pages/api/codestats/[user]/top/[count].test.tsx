import { NextApiRequest, NextApiResponse } from "next";
import handler from "./[count]";

it("renders homepage unchanged", async () => {
  const query: { [name: string]: string } = {
    user: "maorun",
    count: "10",
  };
  const req = {
    query,
  } as NextApiRequest;
  let header: { [key: string]: string } = {};
  let redirect = "";
  const res = {
    setHeader: (key: string, value: string) => {
      header[key] = value;
    },
    redirect: (location: string) => {
      redirect = location;
    },
  } as NextApiResponse;
  await handler(req, res);
  expect(res).toMatchSnapshot();
  expect(header).toMatchSnapshot();
  expect(redirect).toMatchSnapshot();
});
