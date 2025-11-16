import { Tool, ToolSections } from "@/framework/client";

export const githubCliTool: Tool = {
  section: ToolSections.CommandLineTool,
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
