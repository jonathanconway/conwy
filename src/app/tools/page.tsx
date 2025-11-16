import {
  Fragment,
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
            <Fragment>
              <toolsFragment.content />

              <ToolsSections />
            </Fragment>
            <Fragment>
              <toolsSidebarFragment.content />
            </Fragment>
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
