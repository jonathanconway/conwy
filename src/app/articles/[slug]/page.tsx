import { Metadata } from "next";

import { Article } from "@/components";
import { site } from "@/content";
import * as articles from "@/content/articles";
import { Article as Article_ } from "@/framework/client";
import { PageProps } from "../../[slug]/types"

export default async function Page(props: PageProps) {
  const params = await props.params;
  const articleModule = await import(`@/content/articles/${params.slug}`);
  const article = Object.values(articleModule)[0] as Article_;
  return <Article article={article} />;
}

export async function generateStaticParams() {
  const allArticleMetas = Object.values(articles).map((item) => item.meta);
  return allArticleMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const articleModule = await import(`@/content/articles/${params.slug}`);
  const article = Object.values(articleModule)[0] as Article_;
  const articleTitle = article.meta.title.toLowerCase();

  return {
    title: `${site.title} - articles - ${articleTitle}`,
  };
}
