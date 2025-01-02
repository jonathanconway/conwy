import { Tool, ToolSections } from "@/framework/client";

export const Ffmpeg: Tool = {
  section: ToolSections.CommandLine,
  slug: "ffmpeg",
  title: "FFmpeg",
  category: "Multimedia Converter",
  date: "2024-12-07",
  operatingSystems: ["MacOS"],
  url: "https://ffmpeg.org/",
  description: "Record, convert and stream audio and video.",
  mainImage: "/images/tools/terminal.png",
};
