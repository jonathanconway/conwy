import { Tool, ToolSections } from "@/framework/client";

export const Mokku: Tool = {
  section: ToolSections.BrowserExtension,
  slug: "mokku",
  title: "Mokku",
  category: "Developer Tool",
  date: "2025-02-17",
  operatingSystems: ["Chrome"],
  url: "https://chromewebstore.google.com/detail/mokku/llflfcikklhgamfmnjkgpdadpmdplmji",
  description:
    "Adds the API mocker MOKKU to Chrome Developer Tools for seamless integration & testing. Mokku allows you to mock APIs and change their response, response time and status.",
  mainImage: "/images/tools/mokku.png",
};
