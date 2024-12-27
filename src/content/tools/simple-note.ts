import { Tool, ToolSections } from "@/framework/client";

export const SimpleNote: Tool = {
  section: ToolSections.App,
  slug: "simple-note",
  title: "SimpleNote",
  category: "Note Taking",
  date: "2024-12-06",
  operatingSystems: ["MacOS", "iOS", "Android", "Windows", "Linux"],
  url: "https://simplenote.com/",
  description: "All your notes, synced on all your devices. Supports Markdown.",
  mainImage: "/images/tools/simple-note.png",
};
