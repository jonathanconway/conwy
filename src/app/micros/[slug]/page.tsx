import { Metadata } from "next";

import { MicroPage } from "@/components";
import { generateMicroPageTitle } from "@/components/micro/micro-page/micro-page-header";
import { site } from "@/content";
import * as microsMap from "@/content/micros";
import { ContentTypes } from "@/framework/client";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const micro = findImportedContent(microsMap, ContentTypes.Micro, params.slug);

  return <MicroPage micro={micro} />;
}

export async function generateStaticParams() {
  const allMetas = Object.values(microsMap).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const micro = findImportedContent(microsMap, ContentTypes.Micro, params.slug);
  const microTitle = generateMicroPageTitle(micro);

  const title = `${site.title} - micro - ${microTitle}`;

  return {
    title,
  };
}
