import { Suspense } from "react";

import {
  BooksList,
  MdxContainer,
  Page,
  ResponsiveMdHalf,
  Stack,
} from "@/components";
import { readingFragment, site } from "@/content";

import { readingsRoute } from "../routes";

export default function ReadingPage() {
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

export const metadata = {
  title: `${site.title} - reading`,
};
