import { Metadata } from "next";

import { Article } from "@/components";
import { site } from "@/content";
import * as articles from "@/content/articles";
import { Article as Article_, importContentBySlug } from "@/framework/client";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const article = importContentBySlug<Article_>(
    articles,
    "article",
    params.slug,
  );

  return <Article article={article} />;
}

export async function generateStaticParams() {
  const allArticleMetas = Object.values(articles).map((item) => item.meta);
  return allArticleMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const article = importContentBySlug<Article_>(
    articles,
    "article",
    params.slug,
  );

  const articleTitle = article.meta.title.toLowerCase();

  return {
    title: `${site.title} - articles - ${articleTitle}`,
  };
}
