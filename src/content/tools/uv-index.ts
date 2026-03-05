import { Tool, ToolSections } from "@/framework/client";

export const uvIndexTool: Tool = {
  type: "tool",
  meta: {
    section: ToolSections.MobileApp,
    slug: "uv-index",
    title: "UV Index",
    category: "Health",
    date: "2026-03-05",
    operatingSystems: ["iOS"],
    url: "https://www.uvindex.apphttps://sites.google.com/view/uvindexwidgetworldwide/home",
    description: "Protect yourself from sunburn and skin cancer.",
    mainImage: "/images/tools/uv-index.png",
  },
};
