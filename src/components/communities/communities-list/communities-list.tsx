import { ContentListSection } from "@/components/content-list/content-list-sections/content-list-section";
import * as communities from "@/content/communities";
import { sentenceCase } from "@/framework/client";

import { ContentList, ContentListSections } from "../../content-list";
import { SectionHeading } from "../../heading";

import { CommunitiesListItem } from "./communities-list-item";
import { getCommunitiesList } from "./get-communities-list";

export function CommunitiesList() {
  const { communityCategoryEntries } = getCommunitiesList(
    Object.values(communities),
  );

  return (
    <ContentListSections>
      {communityCategoryEntries.map(([communityCategory, communities]) => (
        <ContentListSection key={communityCategory}>
          <SectionHeading>{sentenceCase(communityCategory)}</SectionHeading>

          <ContentList>
            {communities.map((community) => (
              <CommunitiesListItem
                key={community.meta.slug}
                community={community}
              />
            ))}
          </ContentList>
        </ContentListSection>
      ))}
    </ContentListSections>
  );
}
