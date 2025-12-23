import { Tool, ToolSections } from "@/framework/client";

export const beyondCompareTool: Tool = {
  type: "tool",
  meta: {
    section: ToolSections.App,
    slug: "beyond-compare",
    title: "Beyond Compare",
    category: "Comparison",
    date: "2024-12-06",
    operatingSystems: ["MacOS"],
    url: "https://www.scootersoftware.com/",
    description:
      "Compare folders, text files, images, and tables.  Review differences efficiently and merge changes with confidence.",
    mainImage: "/images/tools/beyond-compare.png",
  },
};
