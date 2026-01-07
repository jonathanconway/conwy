import { CommunitiesList, MdxWrapper, PageLayout } from "@/components";
import { site } from "@/content";
import { communitiesFragment } from "@/content/fragments/communities";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/communities"
      main={
        <>
          <MdxWrapper>{communitiesFragment.content}</MdxWrapper>

          <CommunitiesList />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - communities`,
};
