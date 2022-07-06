import { NextApiRequest, NextApiResponse } from "next";
import handler from "./[count]";

it("renders homepage unchanged", async () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({
                languages: {
                    GraphQL: { new_xps: 0, xps: 1165 },
                    VCL: { new_xps: 0, xps: 298 },
                    GoogleKeepPopup: { new_xps: 0, xps: 1 },
                    fzf: { new_xps: 0, xps: 29 },
                    HTML: { new_xps: 0, xps: 59844 },
                    Less: { new_xps: 0, xps: 340 },
                    'Vue template': { new_xps: 0, xps: 63 },
                    JSON: { new_xps: 0, xps: 42022 },
                    Git: { new_xps: 6, xps: 36415 },
                    'Go Template': { new_xps: 0, xps: 28 },
                    nginx: { new_xps: 0, xps: 1 },
                    Twig: { new_xps: 0, xps: 5582 },
                    list: { new_xps: 0, xps: 236 },
                    Diff: { new_xps: 0, xps: 15 },
                    query: { new_xps: 0, xps: 3 },
                    SQL: { new_xps: 0, xps: 422 },
                    'Shell Script (Zsh)': { new_xps: 0, xps: 3326 },
                    qf: { new_xps: 1, xps: 218 },
                    Bash: { new_xps: 0, xps: 1386 },
                    PUML: { new_xps: 0, xps: 17099 },
                    'copilot.php': { new_xps: 0, xps: 7 },
                    vim: { new_xps: 99, xps: 129456 },
                    DotEnv: { new_xps: 0, xps: 437 },
                    TypeScript: { new_xps: 0, xps: 565521 },
                    XML: { new_xps: 0, xps: 1170 },
                    'JavaScript (Flow)': { new_xps: 0, xps: 22262 },
                    lspinfo: { new_xps: 0, xps: 124 },
                    '.npmignore (Npm)': { new_xps: 0, xps: 27 },
                    'Generic SQL': { new_xps: 0, xps: 39 },
                    PHP: { new_xps: 19, xps: 544682 },
                    scminput: { new_xps: 0, xps: 54 },
                    make: { new_xps: 0, xps: 159 },
                    floggraph: { new_xps: 0, xps: 196 },
                    Perl: { new_xps: 0, xps: 1052 },
                    'Terminal (Zsh)': { new_xps: 672, xps: 224578 },
                    Markdown: { new_xps: 0, xps: 46509 },
                    'Git Rebase Message': { new_xps: 0, xps: 604 },
                    '.gitignore (Git)': { new_xps: 0, xps: 347 },
                    MongoJS: { new_xps: 0, xps: 259 },
                    '.gitignore (GitIgnore)': { new_xps: 0, xps: 155 },
                    'Shell Script': { new_xps: 79, xps: 3477 },
                    Dockerfile: { new_xps: 0, xps: 1891 },
                    'SQL (MySQL)': { new_xps: 0, xps: 3374 },
                    text: { new_xps: 0, xps: 6106 },
                    sshconfig: { new_xps: 0, xps: 255 },
                    helm: { new_xps: 0, xps: 208 },
                    CSS: { new_xps: 0, xps: 3828 },
                    SVG: { new_xps: 0, xps: 756 },
                    Blade: { new_xps: 0, xps: 12119 },
                    conf: { new_xps: 0, xps: 907 },
                    YAML: { new_xps: 24, xps: 13269 },
                    'copilot.copilot.php': { new_xps: 0, xps: 3 },
                    'Plain text': { new_xps: 0, xps: 139146 },
                    Lua: { new_xps: 0, xps: 32045 },
                    'JavaScript (JSX)': { new_xps: 0, xps: 7669 },
                    octo_panel: { new_xps: 0, xps: 83 },
                    Python: { new_xps: 0, xps: 18 },
                    Ini: { new_xps: 0, xps: 105 },
                    textmate: { new_xps: 0, xps: 1055 },
                    Groovy: { new_xps: 0, xps: 321 },
                    Makefile: { new_xps: 0, xps: 437 },
                    editorconfig: { new_xps: 0, xps: 8 },
                    JavaScript: { new_xps: 0, xps: 144274 },
                    'copilot.lua': { new_xps: 0, xps: 4 },
                    TeamCityCustomBuildParameters: { new_xps: 0, xps: 141 },
                    PlantUML: { new_xps: 0, xps: 1659 },
                    Gherkin: { new_xps: 0, xps: 85 },
                    MariaDB: { new_xps: 0, xps: 595 },
                    Smarty: { new_xps: 0, xps: 45 },
                    dockercompose: { new_xps: 0, xps: 17 },
                    Log: { new_xps: 0, xps: 19 },
                    'TypeScript (JSX)': { new_xps: 384, xps: 157332 },
                    tmux: { new_xps: 0, xps: 1706 },
                    Docker: { new_xps: 0, xps: 15 },
                    harpoon: { new_xps: 0, xps: 5 },
                    startuptime: { new_xps: 0, xps: 194 },
                    SmartyConfig: { new_xps: 0, xps: 157 },
                    ant: { new_xps: 0, xps: 103 },
                    jproperties: { new_xps: 0, xps: 26 },
                    marco: { new_xps: 0, xps: 1 },
                    SCSS: { new_xps: 0, xps: 12868 },
                    ApacheConfig: { new_xps: 0, xps: 830 },
                    mongodb: { new_xps: 0, xps: 407 },
                    dosini: { new_xps: 0, xps: 579 },
                    'Angular HTML Template': { new_xps: 0, xps: 3795 },
                    Ignore: { new_xps: 0, xps: 26 },
                    'SQL (PostgreSQL)': { new_xps: 0, xps: 18399 }
                },
            }),
        } as Response)
    );
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
