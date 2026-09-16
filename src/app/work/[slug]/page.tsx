import { Metadata } from "next";

import { Breadcrumb, PageLayout, Work } from "@/components";
import { site } from "@/content";
import * as works from "@/content/works";
import { ContentTypes } from "@/framework/client";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const work = findImportedContent(works, ContentTypes.Work, params.slug);

  return (
    <PageLayout
      selectedNavPath="/work"
      main={
        <>
          <Breadcrumb
            segments={[
              {
                title: "Work",
                url: "/work",
              },
              {
                title: work.meta.client,
              },
            ]}
          />

          <Work work={work} />
        </>
      }
    />
  );
}

export async function generateStaticParams() {
  const allMetas = Object.values(works).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const work = findImportedContent(works, ContentTypes.Work, params.slug);

  const client = work.meta.client;
  const clientTitle = client.toLowerCase();
  const title = `${site.title} - work - ${clientTitle}`;

  return {
    title,
  };
}
