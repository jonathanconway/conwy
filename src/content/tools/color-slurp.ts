import { Tool, ToolSections } from "@/framework/client";

export const colorSlurpTool: Tool = {
  type: "tool",
  meta: {
    section: ToolSections.App,
    slug: "color-slurp",
    title: "ColorSlurp",
    category: "Color Picker",
    date: "2024-12-06",
    operatingSystems: ["MacOS"],
    url: "https://colorslurp.com",
    description:
      "Capture the exact colour (hex, rgb, etc) of any pixel on your screen.",
    mainImage: "/images/tools/color-slurp.webp",
  },
};
