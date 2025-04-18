import { Metadata } from "next";

import { Micro, PageLayout } from "@/components";
import { site } from "@/content";
import * as micros from "@/content/micros";
import { Micro as Micro_ } from "@/framework/client";

interface PageProps {
  readonly params: { readonly slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
  const microModule = await import(`@/content/micros/${slug}`);
  const microModuleItems = Object.values(microModule);
  const micro = microModuleItems[0] as Micro_;

  return <PageLayout main={<Micro microMeta={micro.meta} />} />;
}

export async function generateStaticParams() {
  const allMicroMetas = Object.values(micros).map((item) => item.meta);
  return allMicroMetas;
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const microModule = await import(`@/content/micros/${slug}`);
  const micro = Object.values(microModule)[0] as Micro_;
  const title = micro.meta.date;

  return {
    title: `${site.title} - micro - ${title.toLowerCase()}`,
  };
}
