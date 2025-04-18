import { Tool, ToolSections } from "@/framework/client";

export const JsonViewer: Tool = {
  section: ToolSections.App,
  slug: "json-viewer",
  title: "JsonViewer",
  category: "Code Playground",
  date: "2025-01-13",
  operatingSystems: ["MacOS"],
  url: "https://jsonviewer.app",
  description:
    "JSON Viewer is a native Mac app to visualize, validate and format JSON datasets in a clean and snappy interface.",
  mainImage: "/images/tools/json-viewer.png",
};
