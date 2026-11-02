import { createToolsToolRoute, toolsRoute } from "@/app/routes";
import { ToolsListItem } from "@/components";
import { Tool } from "@/framework";

import { Page } from "../../page";

interface ToolPageProps {
  readonly tool: Tool;
}

export function ToolPage(props: ToolPageProps) {
  const { tool } = props;
  const toolRoute = createToolsToolRoute(tool);

  return (
    <Page
      title={toolRoute.title}
      breadcrumbSegments={[toolsRoute, { title: toolRoute.title }]}
    >
      <ToolsListItem tool={tool} />
    </Page>
  );
}
