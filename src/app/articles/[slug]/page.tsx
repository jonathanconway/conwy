import { Metadata } from "next";

import { ArticlePage } from "@/components";
import { site } from "@/content";
import * as articlesMap from "@/content/articles";
import { ContentTypes, NextPageProps } from "@/framework";
import { findImportedContent, getArticle } from "@/framework/server";

export default async function ArticlesArticlePage(props: NextPageProps) {
  const params = await props.params;
  const article = await getArticle(params.slug);

  return <ArticlePage article={article} />;
}

export async function generateStaticParams() {
  return Object.values(articlesMap).map((item) => item.meta);
}

export async function generateMetadata(
  props: NextPageProps,
): Promise<Metadata> {
  const params = await props.params;

  const article = findImportedContent(
    articlesMap,
    ContentTypes.Article,
    params.slug,
  );
  const articleTitle = article.meta.title.toLowerCase();

  const title = `${site.title} - articles - ${articleTitle}`;

  return {
    title,
  };
}
