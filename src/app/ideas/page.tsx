import {
  IdeasList,
  MdxWrapper,
  PageLayout,
  ResponsiveMdHalf,
  Stack,
} from "@/components";
import { site } from "@/content";
import { ideasFragment } from "@/content/fragments";

export default async function IdeasPage() {
  return (
    <PageLayout
      selectedNavPath="/ideas"
      main={
        <Stack gap={2}>
          <ResponsiveMdHalf>
            <MdxWrapper>{ideasFragment.content}</MdxWrapper>
          </ResponsiveMdHalf>

          <IdeasList />
        </Stack>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - ideas`,
};
