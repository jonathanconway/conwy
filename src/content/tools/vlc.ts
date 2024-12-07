import { Tool, ToolSections } from "@/framework";

export const Vlc: Tool = {
  section: ToolSections.App,
  slug: "vlc",
  title: "VLC",
  category: "Media player",
  date: "2024-12-06",
  operatingSystems: ["MacOS", "iOS", "Android", "Windows", "Mac"],
  url: "https://www.videolan.org/vlc/",
  description:
    "Multimedia player and framework that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols.",
  mainImage: "/images/tools/vlc.png",
};
