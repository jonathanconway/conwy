import { Metadata } from "next";

import { PageLayout } from "@/components";
import { Work } from "@/components/work";
import { site } from "@/content";
import * as works from "@/content/works";
import { Work as Work_ } from "@/framework/client";
import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;
  const workModule = await import(`@/content/works/${params.slug}`);
  const workModuleItems = Object.values(workModule);
  const work = workModuleItems[0] as Work_;
  
  return <PageLayout selectedNavPath="/work" main={<Work work={work} />} />;
}

export async function generateStaticParams() {
  const allArticleMetas = Object.values(works).map((item) => item.meta);
  return allArticleMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const workModule = await import(`@/content/works/${params.slug}`);
  const work = Object.values(workModule)[0] as Work_;
  const client = work.meta.client;

  return {
    title: `${site.title} - work - ${client.toLowerCase()}`,
  };
}
