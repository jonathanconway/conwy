import { orderBy } from "lodash";

import * as communities from "@/content/communities";

import { ContentList } from "../../content-list";

import { CommunitiesListItem } from "./communities-list-item";

export function CommunitiesList() {
  const communitiesItems = Object.values(communities);
  const communitiesOrdered = orderBy(
    communitiesItems,
    (community) => community.meta.title,
  );

  return (
    <ContentList>
      {communitiesOrdered.map((community) => (
        <CommunitiesListItem key={community.meta.slug} community={community} />
      ))}
    </ContentList>
  );
}
