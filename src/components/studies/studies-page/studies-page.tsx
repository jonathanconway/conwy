import { Suspense } from "react";

import { studiesRoute } from "@/app/routes";
import {
  MdxContainer,
  Page,
  ResponsiveMdHalf,
  Stack,
  StudiesList,
} from "@/components";
import { studiesFragment } from "@/content";

export function StudiesPage() {
  return (
    <Suspense>
      <Page title={studiesRoute.title}>
        <Stack gap={1}>
          <ResponsiveMdHalf>
            <MdxContainer>{studiesFragment.content}</MdxContainer>
          </ResponsiveMdHalf>

          <ResponsiveMdHalf>
            <StudiesList />
          </ResponsiveMdHalf>
        </Stack>
      </Page>
    </Suspense>
  );
}
