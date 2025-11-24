import { Suspense } from "react";

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
    <Suspense>
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
    </Suspense>
  );
}

export const metadata = {
  title: `${site.title} - studies`,
};
