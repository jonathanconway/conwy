import {
  Breakpoints,
  ContentPageHeader,
  MdxContainer,
  PageLayout,
  ResponsiveStack,
  Stack,
  StackDirections,
} from "@/components";
import {
  friendsFragment,
  friendsPage,
  friendsSidebarFragment,
  site,
} from "@/content";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/friends"
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
              content={friendsPage}
              title={friendsPage.meta.title}
              updatedDate={friendsPage.meta.updatedDate}
            />
            <MdxContainer>{friendsFragment.content}</MdxContainer>
          </Stack>

          <MdxContainer>{friendsSidebarFragment.content}</MdxContainer>
        </ResponsiveStack>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - friends`,
};
