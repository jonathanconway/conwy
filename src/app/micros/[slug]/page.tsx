import { Metadata } from "next";

import { Micro, PageLayout } from "@/components";
import { site } from "@/content";
import * as micros from "@/content/micros";
import { Micro as Micro_, importContentBySlug } from "@/framework/client";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const micro = importContentBySlug<Micro_>(micros, "micro", params.slug);

  return <PageLayout main={<Micro microMeta={micro.meta} />} />;
}

export async function generateStaticParams() {
  const allMicroMetas = Object.values(micros).map((item) => item.meta);
  return allMicroMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const micro = importContentBySlug<Micro_>(micros, "micro", params.slug);

  const microTitle = micro.meta.date.toLowerCase();
  const title = `${site.title} - micro - ${microTitle}`;

  return {
    title,
  };
}
