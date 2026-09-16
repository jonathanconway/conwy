import { Metadata } from "next";

import { ArticleLayout, Commentary } from "@/components";
import { site } from "@/content";
import * as commentaries from "@/content/commentaries";
import { ContentTypes } from "@/framework/client";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const commentary = findImportedContent(
    commentaries,
    ContentTypes.Commentary,
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
  const allMetas = Object.values(commentaries).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const commentary = findImportedContent(
    commentaries,
    ContentTypes.Commentary,
    params.slug,
  );

  const commentaryTitle = commentary.meta.date.toLowerCase();

  const title = `${site.title} - commentaries - ${commentaryTitle}`;

  return {
    title,
  };
}
