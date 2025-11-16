import {
  BooksList,
  Fragment,
  PageLayout,
  ResponsiveMdHalf,
  Stack,
} from "@/components";
import { site } from "@/content";
import { readingFragment } from "@/content/fragments";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/reading"
      main={
        <Stack gap={1}>
          <ResponsiveMdHalf>
            <Fragment>
              <readingFragment.content />
            </Fragment>
          </ResponsiveMdHalf>

          <BooksList />
        </Stack>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - reading`,
};
