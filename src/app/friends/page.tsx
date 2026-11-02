import {
  Breakpoints,
  MdxContainer,
  Page,
  ResponsiveStack,
  StackDirections,
} from "@/components";
import { friendsFragment, friendsSidebarFragment, site } from "@/content";

import { friendsRoute } from "../routes";

export default function FriendsPage() {
  return (
    <Page title={friendsRoute.title}>
      <ResponsiveStack
        direction={{
          [Breakpoints.Small]: StackDirections.ColumnReverse,
          [Breakpoints.Medium]: StackDirections.ColumnReverse,
          [Breakpoints.Large]: StackDirections.Row,
        }}
        alignItems="start"
      >
        <MdxContainer>{friendsFragment.content}</MdxContainer>

        <MdxContainer>{friendsSidebarFragment.content}</MdxContainer>
      </ResponsiveStack>
    </Page>
  );
}

export const metadata = {
  title: `${site.title} - friends`,
};
