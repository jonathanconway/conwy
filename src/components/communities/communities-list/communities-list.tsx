import { Community, sentenceCase } from "@/framework/client";

import {
  ContentList,
  ContentListSection,
  ContentListSections,
} from "../../content-list";
import { SectionHeading } from "../../heading";

import { CommunitiesListItem } from "./communities-list-item";
import { getCommunitiesList } from "./get-communities-list";

interface CommunitiesListProps {
  readonly communities: readonly Community[];
}

export function CommunitiesList(props: CommunitiesListProps) {
  const { communityCategoryEntries } = getCommunitiesList(props.communities);

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
