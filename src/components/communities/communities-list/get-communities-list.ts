import { groupBy, orderBy } from "lodash";

import { Community, CommunityCategories } from "@/framework";

export function getCommunitiesList(communities: readonly Community[]) {
  const communitiesOrdered = orderBy(
    communities,
    (community) => community.meta.title,
    "desc",
  );
  const communitiesByCategory = groupBy(
    communitiesOrdered,
    (community) => community.meta.category,
  );
  const communityCategoryEntries = Object.entries(communitiesByCategory);
  const communityCategories = Object.values(CommunityCategories);

  return {
    communityCategories,
    communityCategoryEntries,
  };
}
