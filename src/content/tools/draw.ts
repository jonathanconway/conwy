import { Tool, ToolSections } from "@/framework/client";

export const Draw: Tool = {
  section: ToolSections.App,
  slug: "draw",
  title: "Draw",
  category: "Diagramming",
  date: "2024-12-06",
  operatingSystems: ["MacOS", "Windows", "Linux"],
  url: "https://www.drawio.com/",
  description:
    "Diagramming tool, suitable for UML, flowcharts, wireframes and more.",
  mainImage: "/images/tools/draw.jpg",
};
