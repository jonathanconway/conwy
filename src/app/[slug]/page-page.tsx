import { Metadata } from "next";

import {
  Breadcrumb,
  Fragment,
  PageLayout,
  ResponsiveMdHalf,
} from "@/components";
import { site } from "@/content";
import { Page as Page__ } from "@/framework";

import { PageProps } from "./types";

export async function PagePage(props: PageProps) {
  const pageModule = await import(`@/content/pages/${props.params.slug}`);
  const page = Object.values(pageModule)[0] as Page__;
  const { title } = page.meta;

  const Content = page.content;

  return (
    <PageLayout
      main={
        <>
          <Breadcrumb
            segments={[
              {
                title: "Home",
                url: "/",
              },
              {
                title,
              },
            ]}
          />

          <ResponsiveMdHalf>
            <Fragment>
              <Content />
            </Fragment>
          </ResponsiveMdHalf>
        </>
      }
    />
  );
}

export async function generateMetadataPage({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const pageModule = await import(`@/content/pages/${slug}`);
  const page = Object.values(pageModule)[0] as Page__;
  const pageTitle = page.meta.title.toLowerCase();

  return {
    title: `${site.title} - pages - ${pageTitle}`,
  };
}
