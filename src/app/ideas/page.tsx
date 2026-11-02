import {
  IdeasList,
  MdxContainer,
  Page,
  ResponsiveMdHalf,
  Stack,
} from "@/components";
import { ideasFragment, site } from "@/content";

import { ideasRoute } from "../routes";

export default async function IdeasPage() {
  return (
    <Page title={ideasRoute.title}>
      <Stack gap={2}>
        <ResponsiveMdHalf>
          <MdxContainer>{ideasFragment.content}</MdxContainer>
        </ResponsiveMdHalf>

        <IdeasList />
      </Stack>
    </Page>
  );
}

export const metadata = {
  title: `${site.title} - ideas`,
};
