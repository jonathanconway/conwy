import { Tool, ToolSections } from "@/framework/client";

export const fzfTool: Tool = {
  type: "tool",
  meta: {
    section: ToolSections.App,
    slug: "fzf",
    title: "Fzf",
    category: "Developer Tool",
    date: "2025-06-06",
    operatingSystems: ["MacOS", "Linux"],
    url: "https://junegunn.github.io/fzf/",
    description: "General-purpose command-line fuzzy finder",
    mainImage: "/images/tools/fzf.png",
  },
};
