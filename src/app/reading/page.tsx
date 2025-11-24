import { Suspense } from "react";

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
    <Suspense>
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
    </Suspense>
  );
}

export const metadata = {
  title: `${site.title} - reading`,
};
