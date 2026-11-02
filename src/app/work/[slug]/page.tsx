import { Metadata } from "next";

import { WorkPage } from "@/components";
import { site } from "@/content";
import * as worksMap from "@/content/works";
import { ContentTypes } from "@/framework";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "../../[slug]/types";

const works = Object.values(worksMap);

export default async function WorksWorkPage(props: PageProps) {
  const params = await props.params;

  const work = findImportedContent(worksMap, ContentTypes.Work, params.slug);

  return <WorkPage work={work} works={works} />;
}

export async function generateStaticParams() {
  const allMetas = Object.values(worksMap).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const work = findImportedContent(worksMap, ContentTypes.Work, params.slug);

  const client = work.meta.client;
  const clientTitle = client.toLowerCase();

  const title = `${site.title} - work - ${clientTitle}`;

  return {
    title,
  };
}
