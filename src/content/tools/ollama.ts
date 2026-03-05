import { Tool, ToolSections } from "@/framework/client";

export const ollamaTool: Tool = {
  type: "tool",
  meta: {
    section: ToolSections.App,
    slug: "ollama",
    title: "Ollama",
    category: "AI",
    date: "2026-03-05",
    operatingSystems: ["MacOS", "Windows", "Linux"],
    url: "https://obsproject.com/",
    description: "Free and open source AI models.",
    mainImage: "/images/tools/ollama.png",
  },
};
