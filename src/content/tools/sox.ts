import { Tool, ToolSections } from "@/framework/client";

export const soxTool: Tool = {
  section: ToolSections.CommandLineTool,
  slug: "sox",
  title: "SOX (Sound eXchange)",
  category: "Audio Converter",
  date: "2024-12-06",
  operatingSystems: ["MacOS"],
  url: "https://sourceforge.net/projects/sox/",
  description:
    "SoX is the Swiss Army Knife of sound processing utilities. It can convert audio files to other popular audio file types and also apply sound effects and filters during the conversion.",
  mainImage: "/images/tools/terminal.png",
};
