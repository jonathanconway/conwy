import { ReactNode } from "react";

import { ArticleLayout, ArticleSidebar } from "@/components";
import { Article as Article_ } from "@/framework/client";

interface LayoutProps {
  readonly children: ReactNode;
  readonly params: Promise<{ readonly slug: string }>;
}

export default async function Layout(props: LayoutProps) {
  const params = await props.params;
  const articleModule = await import(`@/content/articles/${params.slug}`);
  const article = Object.values(articleModule)[0] as Article_;

  return (
    <ArticleLayout
      main={props.children}
      aside={<ArticleSidebar article={article} />}
    />
  );
}
