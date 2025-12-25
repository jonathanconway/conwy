import { CommunitiesList, Fragment, PageLayout } from "@/components";
import { site } from "@/content";
import { communitiesFragment } from "@/content/fragments/communities";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/communities"
      main={
        <>
          <Fragment>
            <communitiesFragment.content />
          </Fragment>

          <CommunitiesList />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - communities`,
};
