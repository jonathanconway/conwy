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
import { site, toolsFragment, toolsSidebarFragment } from "@/content";

import { toolsRoute } from "../routes";

export default function ToolsPage() {
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

        <ToolsList />
      </Stack>
    </Page>
  );
}

export const metadata = {
  title: `${site.title} - uses`,
};
