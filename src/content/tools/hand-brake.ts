import { Tool, ToolSections } from "@/framework/client";

export const handBrakeTool: Tool = {
  type: "tool",
  meta: {
    section: ToolSections.App,
    slug: "hand-brake",
    title: "HandBrake",
    category: "Video Converter",
    date: "2024-12-06",
    operatingSystems: ["MacOS", "Windows"],
    url: "https://handbrake.fr/",
    description:
      "Video converter supporting many input and output sources, with many features.",
    mainImage: "/images/tools/hand-brake.png",
  },
};
