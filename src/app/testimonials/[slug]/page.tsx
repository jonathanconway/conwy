import { Metadata } from "next";

import { PageLayout } from "@/components";
import { Work } from "@/components/work";
import { site } from "@/content";
import * as works from "@/content/works";
import { Work as Work_ } from "@/framework";

interface PageProps {
  readonly params: { readonly slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
  const workModule = await import(`@/content/works/${slug}`);
  const workModuleItems = Object.values(workModule);
  const work = workModuleItems[0] as Work_;

  return <PageLayout selectedNavPath="/work" main={<Work work={work} />} />;
}

export async function generateStaticParams() {
  const allArticleMetas = Object.values(works).map((item) => item.meta);
  return allArticleMetas;
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const workModule = await import(`@/content/works/${slug}`);
  const work = Object.values(workModule)[0] as Work_;
  const client = work.meta.client;

  return {
    title: `${site.title} - work - ${client.toLowerCase()}`,
  };
}
