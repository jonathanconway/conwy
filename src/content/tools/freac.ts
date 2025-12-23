import { Tool, ToolSections } from "@/framework/client";

export const freacTool: Tool = {
  type: "tool",
  meta: {
    section: ToolSections.App,
    slug: "freac",
    title: "fre:ac",
    category: "Audio Converter",
    date: "2025-02-20",
    operatingSystems: ["Windows"],
    url: "https://www.freac.org",
    description:
      "fre:ac is a free audio converter and CD ripper with support for various popular formats and encoders. It converts freely between MP3, M4A/AAC, FLAC, WMA, Opus, Ogg Vorbis, Speex, Monkey's Audio (APE), WavPack, WAV and other formats.",
    mainImage: "/images/tools/freac.png",
  },
};
