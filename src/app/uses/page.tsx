import {
  MdxContainer,
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
      selectedNavPath="/uses"
      main={
        <Stack gap={2}>
          <ResponsiveStack
            direction={{
              md: "row",
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
