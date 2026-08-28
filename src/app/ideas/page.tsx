import {
  IdeasList,
  MdxContainer,
  PageLayout,
  ResponsiveMdHalf,
  Stack,
} from "@/components";
import { ideasFragment, site } from "@/content";

export default async function IdeasPage() {
  return (
    <PageLayout
      selectedNavPath="/ideas"
      main={
        <Stack gap={2}>
          <ResponsiveMdHalf>
            <MdxContainer>{ideasFragment.content}</MdxContainer>
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
