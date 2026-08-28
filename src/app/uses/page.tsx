import {
  Breakpoints,
  MdxContainer,
  PageLayout,
  ResponsiveStack,
  Stack,
  StackDirections,
  ToolsList,
  ToolsSections,
} from "@/components";
import { site, toolsFragment, toolsSidebarFragment } from "@/content";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/uses"
      main={
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
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - uses`,
};
