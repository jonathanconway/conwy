import { Tool, ToolSections } from "@/framework";

export const GithubCli: Tool = {
  section: ToolSections.CommandLine,
  slug: "github-cli",
  title: "Github CLI",
  category: "Git Tool",
  date: "2024-12-06",
  operatingSystems: ["MacOS"],
  url: "https://cli.github.com",
  description:
    "GitHub CLI brings GitHub to your terminal. Free and open source.",
  mainImage: "/images/tools/terminal.png",
};
