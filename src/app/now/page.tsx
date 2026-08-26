import {
  ContentPageHeader,
  MdxContainer,
  PageLayout,
  ResponsiveStack,
  Stack,
} from "@/components";
import { nowPage, site } from "@/content";
import { nowFragment, nowSidebarFragment } from "@/content/fragments";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/now"
      main={
        <ResponsiveStack
          direction={{
            md: "row",
          }}
          alignItems="start"
        >
          <Stack gap={2}>
            <ContentPageHeader
              content={nowPage}
              title={nowPage.meta.title}
              updatedDate={nowPage.meta.updatedDate}
            />
            <MdxContainer>{nowFragment.content}</MdxContainer>
          </Stack>

          <MdxContainer>{nowSidebarFragment.content}</MdxContainer>
        </ResponsiveStack>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - now`,
};
