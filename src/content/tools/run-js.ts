import { Tool, ToolSections } from "@/framework/client";

export const RunJs: Tool = {
  section: ToolSections.App,
  slug: "run-js",
  title: "RunJS",
  category: "Code Playground",
  date: "2024-12-06",
  operatingSystems: ["MacOS", "Windows", "Linux"],
  url: "https://runjs.app",
  description:
    "Explore and experiment with JavaScript and TypeScript, visualise your ideas and get instant feedback as you type.",
  mainImage: "/images/tools/run-js.svg",
};
