import { Tool, ToolSections } from "@/framework/client";

export const transmissionTool: Tool = {
  type: "tool",
  meta: {
    section: ToolSections.App,
    slug: "transmission",
    title: "Transmission",
    category: "BitTorrent client",
    date: "2024-12-06",
    operatingSystems: ["MacOS", "Windows", "Linux"],
    url: "https://transmissionbt.com",
    description: "Fast, Easy and Free Bittorrent Client.",
    mainImage: "/images/tools/transmission.png",
  },
};
