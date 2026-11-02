import {
  Breakpoints,
  ContentPageSubHeader,
  MdxContainer,
  Page,
  ResponsiveStack,
  Stack,
  StackDirections,
} from "@/components";
import { nowFragment, nowPage, nowSidebarFragment, site } from "@/content";

import { nowRoute } from "../routes";

export default function NowPage() {
  return (
    <Page
      title={nowRoute.title}
      subHeaderSlot={
        <ContentPageSubHeader
          content={nowPage}
          updatedDate={nowPage.meta.updatedDate}
        />
      }
    >
      <ResponsiveStack
        direction={{
          [Breakpoints.Small]: StackDirections.ColumnReverse,
          [Breakpoints.Medium]: StackDirections.ColumnReverse,
          [Breakpoints.Large]: StackDirections.Row,
        }}
        alignItems="start"
      >
        <MdxContainer>{nowFragment.content}</MdxContainer>

        <MdxContainer>{nowSidebarFragment.content}</MdxContainer>
      </ResponsiveStack>
    </Page>
  );
}

export const metadata = {
  title: `${site.title} - now`,
};
