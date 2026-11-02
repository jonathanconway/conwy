import { Suspense } from "react";

import { readingsRoute } from "@/app/routes";
import {
  BooksList,
  MdxContainer,
  Page,
  ResponsiveMdHalf,
  Stack,
} from "@/components";
import { readingFragment } from "@/content";

export function BooksPage() {
  return (
    <Suspense>
      <Page title={readingsRoute.title}>
        <Stack gap={1}>
          <ResponsiveMdHalf>
            <MdxContainer>{readingFragment.content}</MdxContainer>
          </ResponsiveMdHalf>

          <BooksList />
        </Stack>
      </Page>
    </Suspense>
  );
}
