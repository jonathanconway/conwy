import { Tool, ToolSections } from "@/framework/client";

export const inkScapeTool: Tool = {
  type: "tool",
  meta: {
    section: ToolSections.App,
    slug: "inkscape",
    title: "InkScape",
    category: "Vector Image Editor",
    date: "2025-12-25",
    operatingSystems: ["MacOS", "Windows", "Linux"],
    url: "https://inkscape.org",
    description:
      "Nice free & open-source tool for editing SVG (Scalable Vector Graphics). Takes some time to learn but there is a very helpful community and plenty of tutorials to guide you.",
    mainImage: "/images/tools/inkscape.svg",
  },
};
