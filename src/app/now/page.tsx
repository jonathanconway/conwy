import {
  Breakpoints,
  ContentPageHeader,
  MdxContainer,
  PageLayout,
  ResponsiveStack,
  Stack,
  StackDirections,
} from "@/components";
import { nowFragment, nowPage, nowSidebarFragment, site } from "@/content";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/now"
      main={
        <ResponsiveStack
          direction={{
            [Breakpoints.Small]: StackDirections.ColumnReverse,
            [Breakpoints.Medium]: StackDirections.ColumnReverse,
            [Breakpoints.Large]: StackDirections.Row,
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
