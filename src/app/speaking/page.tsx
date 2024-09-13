import { Breadcrumb, Fragment, PageLayout } from "@/components";
import { site } from "@/content";
import { Speaking } from "@/content/fragments/speaking";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/speaking"
      main={
        <>
          <Breadcrumb
            segments={[
              {
                title: "Home",
                url: "/",
              },
              {
                title: "Speaking",
              },
            ]}
          />

          <Fragment>
            <Speaking />
          </Fragment>
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - speaking`,
};
