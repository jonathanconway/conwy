import { CommunitiesList, MdxContainer, PageLayout } from "@/components";
import { communitiesFragment, site } from "@/content";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/communities"
      main={
        <>
          <MdxContainer>{communitiesFragment.content}</MdxContainer>

          <CommunitiesList />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - communities`,
};
