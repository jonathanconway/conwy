import { Tool, ToolSections } from "@/framework/client";

export const obsidianTool: Tool = {
  type: "tool",
  meta: {
    section: ToolSections.App,
    slug: "obsidian",
    title: "Obsidian",
    category: "Notes",
    date: "2026-03-05",
    operatingSystems: ["MacOS", "Android", "iOS", "Windows", "Linux"],
    url: "http://obsidian.md",
    description:
      "Free, open source, beautifully designed Markdown-based note taking app. Amazing plugin ecosystem and simply syncing.",
    mainImage: "/images/tools/obsidian.svg",
  },
};
