import {
  Fragment,
  PageLayout,
  ResponsiveMdHalf,
  Stack,
  ToolsList,
} from "@/components";
import { site } from "@/content";
import { Tools } from "@/content/fragments";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/tools"
      main={
        <Stack gap={1}>
          <ResponsiveMdHalf>
            <Fragment>
              <Tools />
            </Fragment>
          </ResponsiveMdHalf>

          <ToolsList />
        </Stack>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - reading`,
};
