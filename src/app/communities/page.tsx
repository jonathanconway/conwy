import { CommunitiesList, MdxContainer, PageLayout } from "@/components";
import { communitiesFragment, site } from "@/content";
import * as communitiesMap from "@/content/communities";

const communities = Object.values(communitiesMap);

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/communities"
      main={
        <>
          <MdxContainer>{communitiesFragment.content}</MdxContainer>

          <CommunitiesList communities={communities} />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - communities`,
};
