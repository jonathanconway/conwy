import { ReactNode } from "react";

import { ArticleLayout, ArticleSidebar } from "@/components";
import { getArticle } from "@/framework/server";

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
