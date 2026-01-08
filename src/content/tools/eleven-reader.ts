import { Tool, ToolSections } from "@/framework/client";

export const elevenReaderTool: Tool = {
  type: "tool",
  meta: {
    slug: "eleven-reader",
    title: "Eleven reader",
    section: ToolSections.MobileApp,
    date: "2026-01-08",
    mainImage: "/images/tools/elevenreader.webp",
    operatingSystems: ["iOS", "Android"],
    url: "https://elevenlabs.io/mobile",
    description:
      "Text to speech. High quality. Can read off web pages (pasted link), PDFs and scanned text.",
    category: "Text to Speech",
  },
};
