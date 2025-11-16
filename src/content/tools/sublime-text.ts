import { Tool, ToolSections } from "@/framework/client";

export const sublimeTextTool: Tool = {
  section: ToolSections.App,
  slug: "sublime-text",
  title: "Sublime Text",
  category: "Editor",
  date: "2024-12-06",
  operatingSystems: ["MacOS", "Windows", "Linux"],
  url: "https://www.sublimetext.com/",
  description: "Fast, feature-packed text editor.",
  mainImage: "/images/tools/sublime-text.png",
};
