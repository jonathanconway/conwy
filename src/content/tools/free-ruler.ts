import { Tool, ToolSections } from "@/framework/client";

export const freeRulerTool: Tool = {
  type: "tool",
  meta: {
    section: ToolSections.App,
    slug: "free-ruler",
    title: "FreeRuler",
    category: "Ruler",
    date: "2024-12-06",
    operatingSystems: ["MacOS"],
    url: "https://www.pascal.com/freeruler",
    description:
      "Measure any object on your screen, horizontally or vertically, in pixels.",
    mainImage: "/images/tools/free-ruler.png",
  },
};
