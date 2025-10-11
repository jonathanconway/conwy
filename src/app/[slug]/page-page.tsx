import { Metadata } from "next";

import {
  Breadcrumb,
  Fragment,
  PageLayout,
  ResponsiveMdHalf,
} from "@/components";
import { site } from "@/content";
import { Page as Page__ } from "@/framework/client";

import { PageProps } from "./types";

export async function PagePage(props: PageProps) {
  const params = await props.params;
  const pageModule = await import(`@/content/pages/${params.slug}`);
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

export async function generateMetadataPage(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const pageModule = await import(`@/content/pages/${params.slug}`);
  const page = Object.values(pageModule)[0] as Page__;
  const pageTitle = page.meta.title.toLowerCase();

  return {
    title: `${site.title} - pages - ${pageTitle}`,
  };
}
