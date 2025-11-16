import {
  Fragment,
  IdeasList,
  PageLayout,
  ResponsiveMdHalf,
  Stack,
} from "@/components";
import { site } from "@/content";
import { ideasFragment } from "@/content/fragments";

export default async function IdeasPage() {
  return (
    <PageLayout
      selectedNavPath="/ideas"
      main={
        <Stack gap={2}>
          <ResponsiveMdHalf>
            <Fragment>
              <ideasFragment.content />
            </Fragment>
          </ResponsiveMdHalf>

          <IdeasList />
        </Stack>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - ideas`,
};
