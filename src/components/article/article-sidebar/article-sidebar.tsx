import { Article as Article_ } from "@/framework/client";

import { ContentSidebarContainer } from "../../content-page";

import { ArticleSidebarHeadings } from "./article-sidebar-headings";
import { ArticleSidebarImage } from "./article-sidebar-image";
import { ArticleSidebarLinks } from "./article-sidebar-links";

export interface ArticleSidebarProps {
  readonly article: Article_;
}

export function ArticleSidebar(props: ArticleSidebarProps) {
  const { article } = props;

  return (
    <ContentSidebarContainer>
      <ArticleSidebarHeadings articleMeta={article.meta} />

      <ArticleSidebarImage articleMeta={article.meta} />

      <ArticleSidebarLinks articleMeta={article.meta} />
    </ContentSidebarContainer>
  );
}
