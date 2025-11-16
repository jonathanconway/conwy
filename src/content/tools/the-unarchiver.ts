import { Tool, ToolSections } from "@/framework/client";

export const theUnarchiverTool: Tool = {
  section: ToolSections.App,
  slug: "the-unarchiver",
  title: "The Unarchiver",
  category: "Decompressor",
  date: "2024-12-06",
  operatingSystems: ["MacOS"],
  url: "https://theunarchiver.com/",
  description: "Open any archive in seconds. Supports ZIP, RAR and more.",
  mainImage: "/images/tools/the-unarchiver.png",
};
