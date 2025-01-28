import {
  Fragment,
  PageLayout,
  ResponsiveMdHalf,
  Stack,
  StudiesList,
} from "@/components";
import { site } from "@/content";
import { Studies } from "@/content/fragments";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/studies"
      main={
        <Stack gap={1}>
          <ResponsiveMdHalf>
            <Fragment>
              <Studies />
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
