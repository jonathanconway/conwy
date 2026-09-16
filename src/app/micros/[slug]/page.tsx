import { Metadata } from "next";

import { Micro, PageLayout } from "@/components";
import { site } from "@/content";
import * as micros from "@/content/micros";
import { ContentTypes } from "@/framework/client";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const micro = findImportedContent(micros, ContentTypes.Micro, params.slug);

  return <PageLayout main={<Micro micro={micro} />} />;
}

export async function generateStaticParams() {
  const allMetas = Object.values(micros).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const micro = findImportedContent(micros, ContentTypes.Micro, params.slug);

  const microTitle = micro.meta.createdDate.toLowerCase();
  const title = `${site.title} - micro - ${microTitle}`;

  return {
    title,
  };
}
