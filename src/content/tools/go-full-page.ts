import { Tool, ToolSections } from "@/framework/client";

export const goFullPageTool: Tool = {
  type: "tool",
  meta: {
    section: ToolSections.BrowserExtension,
    slug: "go-full-page",
    title: "GoFullPage",
    category: "Developer Tool",
    date: "2025-01-14",
    operatingSystems: ["MacOS"],
    url: "https://gofullpage.com/",
    description:
      "Full webpage screenshot in just a single click. Exports to PNG or PDF.",
    mainImage: "/images/tools/go-full-page.png",
  },
};
