import {
  MdxWrapper,
  PageLayout,
  ResponsiveStack,
  Stack,
  ToolsList,
  ToolsSections,
} from "@/components";
import { site } from "@/content";
import { toolsFragment, toolsSidebarFragment } from "@/content/fragments";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/tools"
      main={
        <Stack gap={1}>
          <ResponsiveStack
            direction={{
              md: "row",
            }}
          >
            <Stack>
              <MdxWrapper>{toolsFragment.content}</MdxWrapper>

              <ToolsSections />
            </Stack>

            <MdxWrapper>{toolsSidebarFragment.content}</MdxWrapper>
          </ResponsiveStack>

          <ToolsList />
        </Stack>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - tools`,
};
