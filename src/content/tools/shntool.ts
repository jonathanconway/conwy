import { Tool, ToolSections } from "@/framework/client";

export const shntoolTool: Tool = {
  type: "tool",
  meta: {
    section: ToolSections.CommandLineTool,
    slug: "shntool",
    title: "shntool",
    category: "Audio Converter",
    date: "2024-12-07",
    operatingSystems: ["MacOS"],
    url: "http://shnutils.freeshell.org/shntool/",
    description: "Lossless audio manipulation utility",
    mainImage: "/images/tools/terminal.png",
  },
};
