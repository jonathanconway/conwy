import { Metadata } from "next";

import { Article } from "@/components";
import { site } from "@/content";
import * as articles from "@/content/articles";
import { Article as Article_ } from "@/framework";

interface PageProps {
  readonly params: { readonly slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
  const articleModule = await import(`@/content/articles/${slug}`);
  const article = Object.values(articleModule)[0] as Article_;
  // const article = articles.streamliningCodeReviews; //
  return <Article article={article} />;
}

export async function generateStaticParams() {
  const allArticleMetas = Object.values(articles).map((item) => item.meta);
  return allArticleMetas;
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const articleModule = await import(`@/content/articles/${slug}`);
  const article = Object.values(articleModule)[0] as Article_;
  // const article = articles.streamliningCodeReviews; //
  const articleTitle = article.meta.title.toLowerCase();

  return {
    title: `${site.title} - articles - ${articleTitle}`,
  };
}
