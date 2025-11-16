import { Tool, ToolSections } from "@/framework/client";

export const calibreTool: Tool = {
  section: ToolSections.App,
  slug: "calibre",
  title: "Calibre",
  category: "Converter",
  date: "2024-12-06",
  operatingSystems: ["MacOS"],
  url: "https://www.calibre-ebook.com",
  description:
    "Convert between various eBook formats. Supports EPUB, MOBI, PDF and more.",
  mainImage: "/images/tools/calibre.png",
};
