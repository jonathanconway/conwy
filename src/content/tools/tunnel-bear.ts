import { Tool, ToolSections } from "@/framework/client";

export const tunnelBearTool: Tool = {
  section: ToolSections.App,
  slug: "tunnel-bear",
  title: "TunnelBear",
  category: "VPN",
  date: "2024-12-06",
  operatingSystems: ["MacOS", "iOS", "Android", "Windows"],
  url: "https://www.tunnelbear.com/",
  description:
    "TunnelBear encrypts your internet connection to keep your online activity private on any network.",
  mainImage: "/images/tools/tunnel-bear.svg",
};
