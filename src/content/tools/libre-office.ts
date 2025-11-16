import { Tool, ToolSections } from "@/framework/client";

export const libreOfficeTool: Tool = {
  section: ToolSections.App,
  slug: "libre-office",
  title: "LibreOffice",
  category: "Office",
  date: "2024-12-06",
  operatingSystems: ["MacOS", "Windows", "Linux"],
  url: "https://www.libreoffice.org/",
  description:
    "Powerful office suite – its clean interface and its powerful tools let you unleash your creativity and grow your productivity.",
  mainImage: "/images/tools/libre-office.png",
};
