import {
  Fragment,
  PageLayout,
  ResponsiveMdHalf,
  Stack,
  StudiesList,
} from "@/components";
import { site } from "@/content";
import { studiesFragment } from "@/content/fragments";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/studies"
      main={
        <Stack gap={1}>
          <ResponsiveMdHalf>
            <Fragment>
              <studiesFragment.content />
            </Fragment>
          </ResponsiveMdHalf>

          <StudiesList />
        </Stack>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - studies`,
};
