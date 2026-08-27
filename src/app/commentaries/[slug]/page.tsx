import { Metadata } from "next";

import { ArticleLayout, Commentary } from "@/components";
import { site } from "@/content";
import * as commentaries from "@/content/commentaries";
import {
  Commentary as Commentary_,
  importContentBySlug,
} from "@/framework/client";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const commentary = importContentBySlug<Commentary_>(
    commentaries,
    "commentary",
    params.slug,
  );

  return (
    <ArticleLayout
      main={<Commentary commentary={commentary} />}
      aside={<></>}
    />
  );
}

export async function generateStaticParams() {
  return Object.values(commentaries).map((item) => item.meta);
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const commentary = importContentBySlug<Commentary_>(
    commentaries,
    "commentary",
    params.slug,
  );

  const commentaryTitle = commentary.meta.date.toLowerCase();

  const title = `${site.title} - commentaries - ${commentaryTitle}`;

  return {
    title,
  };
}
