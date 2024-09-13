import { ReactNode } from "react";

import { ArticleLayout, ArticleSidebar } from "@/components";
import { Article as Article_ } from "@/framework";

interface LayoutProps {
  readonly children: ReactNode;
  readonly params: { readonly slug: string };
}

export default async function Layout({
  children,
  params: { slug },
}: LayoutProps) {
  const articleModule = await import(`@/content/articles/${slug}`);
  const article = Object.values(articleModule)[0] as Article_;

  return (
    <ArticleLayout
      main={children}
      aside={<ArticleSidebar article={article} />}
    />
  );
}
