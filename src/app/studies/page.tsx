import { Suspense } from "react";

import {
  MdxContainer,
  Page,
  ResponsiveMdHalf,
  Stack,
  StudiesList,
} from "@/components";
import { site, studiesFragment } from "@/content";

import { studiesRoute } from "../routes";

export default function StudiesPage() {
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

export const metadata = {
  title: `${site.title} - studies`,
};
