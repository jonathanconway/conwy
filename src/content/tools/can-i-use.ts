import { Tool, ToolSections } from "@/framework/client";

export const canIUseTool: Tool = {
  type: "tool",
  meta: {
    section: ToolSections.Website,
    slug: "can-i-use",
    title: "Can I Use",
    category: "Accessibility",
    date: "2024-12-07",
    operatingSystems: ["Web"],
    url: "https://caniuse.com/",
    description: "Check browser support for web features.",
    mainImage: "/images/tools/can-i-use.png",
  },
};
