import { Tool, ToolSections } from "@/framework";

export const Fzf: Tool = {
  section: ToolSections.App,
  slug: "fzf",
  title: "Fzf",
  category: "Developer Tool",
  date: "2025-06-06",
  operatingSystems: ["MacOS", "Linux"],
  url: "https://junegunn.github.io/fzf/",
  description: "General-purpose command-line fuzzy finder",
  mainImage: "/images/tools/fzf.png",
};
