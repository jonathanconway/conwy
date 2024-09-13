import { Breadcrumb, Fragment, PageLayout } from "@/components";
import { site } from "@/content";
import { AboutMeLong } from "@/content/fragments/about-me-long";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/about"
      main={
        <>
          <Breadcrumb
            segments={[
              {
                title: "Home",
                url: "/",
              },
              {
                title: "About me",
              },
            ]}
          />

          <Fragment>
            <AboutMeLong />
          </Fragment>
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - about me`,
};
