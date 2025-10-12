import {
  Fragment,
  IdeasList,
  PageLayout,
  ResponsiveMdHalf,
  Stack,
} from "@/components";
import { site } from "@/content";
import { Ideas } from "@/content/fragments";

export default async function IdeasPage() {
  return (
    <PageLayout
      selectedNavPath="/ideas"
      main={
        <Stack gap={2}>
          <ResponsiveMdHalf>
            <Fragment>
              <Ideas />
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
