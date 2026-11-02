import { Metadata } from "next";

import { MicroPage } from "@/components";
import { generateMicroPageHeaderTitle } from "@/components/micro/micro-page/micro-page-header";
import { site } from "@/content";
import * as microsMap from "@/content/micros";
import { ContentTypes, NextPageProps } from "@/framework";
import { findImportedContent } from "@/framework/server";

export default async function MicrosMicroPage(props: NextPageProps) {
  const params = await props.params;

  const micro = findImportedContent(microsMap, ContentTypes.Micro, params.slug);

  return <MicroPage micro={micro} />;
}

export async function generateStaticParams() {
  const allMetas = Object.values(microsMap).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(
  props: NextPageProps,
): Promise<Metadata> {
  const params = await props.params;

  const micro = findImportedContent(microsMap, ContentTypes.Micro, params.slug);
  const microTitle = generateMicroPageHeaderTitle(micro);

  const title = `${site.title} - micro - ${microTitle}`;

  return {
    title,
  };
}
