import { Suspense } from "react";

import {
  BooksList,
  MdxContainer,
  PageLayout,
  ResponsiveMdHalf,
  Stack,
} from "@/components";
import { readingFragment, site } from "@/content";

export default function Page() {
  return (
    <Suspense>
      <PageLayout
        selectedNavPath="/reading"
        main={
          <Stack gap={1}>
            <ResponsiveMdHalf>
              <MdxContainer>{readingFragment.content}</MdxContainer>
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
