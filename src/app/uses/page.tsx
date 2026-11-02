import { ToolsPage } from "@/components";
import { site } from "@/content";
import * as toolsMap from "@/content/tools";
import { Tool } from "@/framework";

const tools = Object.values(toolsMap) as readonly Tool[];

export default function ToolsPage_() {
  return <ToolsPage tools={tools} />;
}

export const metadata = {
  title: `${site.title} - uses`,
};
