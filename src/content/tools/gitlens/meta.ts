import { ToolMeta, ToolSections } from "@/framework/client";

export const meta: ToolMeta = {
  section: ToolSections.IdeExtension,
  slug: "gitlens",
  title: "GitLens",
  category: "Git Blame UI",
  date: "2026-07-13",
  operatingSystems: ["MacOS", "Windows", "Linux"],
  url: "https://www.gitkraken.com/gitlens",
  description:
    "Visualize code authorship at a glance via Git blame annotations and CodeLens.",
  mainImage: "/images/tools/gitlens.png",
};
