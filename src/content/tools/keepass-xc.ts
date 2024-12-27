import { Tool, ToolSections } from "@/framework/client";

export const KeepassXc: Tool = {
  section: ToolSections.App,
  slug: "keepass-xc",
  title: "KeePassXC",
  category: "Password Manager",
  date: "2024-12-06",
  operatingSystems: ["MacOS"],
  url: "https://keepassxc.org/",
  description:
    "Safely store your passwords and auto-fill them into your favorite apps. No-nonsense, ad-free, tracker-free, and cloud-free.",
  mainImage: "/images/tools/keepass-xc.svg",
};
