import { Suspense } from "react";

import {
  BooksList,
  MdxWrapper,
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
              <MdxWrapper>{readingFragment.content}</MdxWrapper>
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
