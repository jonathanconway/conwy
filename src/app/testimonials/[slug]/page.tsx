import { Metadata } from "next";

import { PageLayout } from "@/components";
import { Work } from "@/components/work";
import { site } from "@/content";
import * as works from "@/content/works";
import { Work as Work_, importContentBySlug } from "@/framework/client";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const work = importContentBySlug<Work_>(works, "work", params.slug);

  return <PageLayout selectedNavPath="/work" main={<Work work={work} />} />;
}

export async function generateStaticParams() {
  const allArticleMetas = Object.values(works).map((item) => item.meta);
  return allArticleMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const work = importContentBySlug<Work_>(works, "work", params.slug);

  const client = work.meta.client;
  const clientTitle = client.toLowerCase();
  const title = `${site.title} - work - ${clientTitle}`;

  return {
    title,
  };
}
