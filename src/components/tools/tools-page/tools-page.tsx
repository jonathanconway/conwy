import { toolsRoute } from "@/app/routes";
import {
  Breakpoints,
  MdxContainer,
  Page,
  ResponsiveStack,
  Stack,
  StackDirections,
  ToolsList,
  ToolsSections,
} from "@/components";
import { toolsFragment, toolsSidebarFragment } from "@/content";
import { Tool } from "@/framework";

interface ToolsPageProps {
  readonly tools: readonly Tool[];
}

export function ToolsPage(props: ToolsPageProps) {
  const { tools } = props;
  return (
    <Page title={toolsRoute.title}>
      <Stack gap={2}>
        <ResponsiveStack
          direction={{
            [Breakpoints.Small]: StackDirections.ColumnReverse,
            [Breakpoints.Medium]: StackDirections.ColumnReverse,
            [Breakpoints.Large]: StackDirections.Row,
          }}
          alignItems="start"
        >
          <Stack>
            <MdxContainer>{toolsFragment.content}</MdxContainer>

            <ToolsSections />
          </Stack>

          <MdxContainer>{toolsSidebarFragment.content}</MdxContainer>
        </ResponsiveStack>

        <ToolsList tools={tools} />
      </Stack>
    </Page>
  );
}
