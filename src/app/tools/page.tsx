import {
  Fragment,
  PageLayout,
  ResponsiveStack,
  Stack,
  ToolsList,
  ToolsSections,
} from "@/components";
import { site } from "@/content";
import { Tools, ToolsSidebar } from "@/content/fragments";

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
              <Tools />

              <ToolsSections />
            </Fragment>
            <Fragment>
              <ToolsSidebar />
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
