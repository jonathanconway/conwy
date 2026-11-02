import { kebabCase } from "lodash";

import {
  CommunitiesList,
  MdxContainer,
  Page,
  ResponsiveMdHalf,
  SectionHeadingsList,
  Stack,
  getCommunitiesList,
} from "@/components";
import { communitiesFragment, site } from "@/content";
import * as communitiesMap from "@/content/communities";
import { sentenceCase } from "@/framework";

import { communitiesRoute } from "../routes";

const communities = Object.values(communitiesMap);

export default function CommunitiesPage() {
  const { communityCategories } = getCommunitiesList(communities);
  const sectionHeadings = communityCategories.map((category) => ({
    title: sentenceCase(category),
    slug: kebabCase(category),
  }));

  return (
    <Page title={communitiesRoute.title}>
      <Stack gap={2}>
        <ResponsiveMdHalf>
          <Stack gap={2}>
            <MdxContainer>{communitiesFragment.content}</MdxContainer>

            <SectionHeadingsList sectionHeadings={sectionHeadings} />
          </Stack>
        </ResponsiveMdHalf>

        <CommunitiesList communities={communities} />
      </Stack>
    </Page>
  );
}

export const metadata = {
  title: `${site.title} - communities`,
};
