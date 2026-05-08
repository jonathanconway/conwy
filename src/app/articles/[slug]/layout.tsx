import { ReactNode } from "react";

import { ArticleLayout, ArticleSidebar } from "@/components";
import { getArticle, readContentMdx } from "@/framework";
import {
  Article as Article_,
  ContentTypes,
  generateArticleMetaExtensions,
  importContentBySlug,
} from "@/framework/client";

interface LayoutProps {
  readonly children: ReactNode;
  readonly params: Promise<{ readonly slug: string }>;
}

export default async function Layout(props: LayoutProps) {
  const params = await props.params;

  const article = await getArticle(params.slug);

  return (
    <ArticleLayout
      main={props.children}
      aside={<ArticleSidebar article={article} />}
    />
  );
}
