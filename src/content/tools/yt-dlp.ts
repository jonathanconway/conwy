import { Tool, ToolSections } from "@/framework/client";

export const YtDlp: Tool = {
  section: ToolSections.CommandLine,
  slug: "yt-dlp",
  title: "yt-dlp",
  category: "Video Downloader",
  date: "2024-12-07",
  operatingSystems: ["MacOS"],
  url: "https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#readme",
  description:
    "Feature-rich command-line audio/video downloader with support for thousands of sites",
  mainImage: "/images/tools/terminal.png",
};
