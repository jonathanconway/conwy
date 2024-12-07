import { Tool, ToolSections } from "@/framework";

export const ObsStudio: Tool = {
  section: ToolSections.App,
  slug: "obs-studio",
  title: "OBS Studio",
  category: "Video Recording",
  date: "2024-12-06",
  operatingSystems: ["MacOS", "Windows", "Linux"],
  url: "https://obsproject.com/",
  description:
    "Free and open source software for video recording and live streaming.",
  mainImage: "/images/tools/obs-studio.png",
};
