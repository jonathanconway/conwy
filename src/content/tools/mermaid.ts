import { Tool, ToolSections } from "@/framework/client";

export const mermaidTool: Tool = {
  section: ToolSections.Website,
  slug: "mermaid",
  title: "Mermaid",
  category: "Diagramming",
  date: "2024-12-07",
  operatingSystems: ["Web"],
  url: "https://mermaid.live/",
  description:
    "Mermaid is a simple markdown-like script language for generating charts from text via javascript.",
  mainImage: "/images/tools/mermaid.svg",
};
