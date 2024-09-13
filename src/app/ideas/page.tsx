import { Breadcrumb, Fragment, PageLayout } from "@/components";
import { site } from "@/content";
import { Ideas } from "@/content/fragments/ideas";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/ideas"
      main={
        <>
          <Breadcrumb
            segments={[
              {
                title: "Home",
                url: "/",
              },
              {
                title: "Ideas",
              },
            ]}
          />

          <Fragment>
            <Ideas />
          </Fragment>
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - ideas`,
};
