import { Article as Article_ } from "@/framework/client";

import { getArticleHeadings } from "../article-headings";

import { ArticleSidebarContainer } from "./article-sidebar-container";
import { ArticleSidebarHeadings } from "./article-sidebar-headings";
import { ArticleSidebarImage } from "./article-sidebar-image";
import { ArticleSidebarLinks } from "./article-sidebar-links";
import * as styles from "./article-sidebar.css";

export interface ArticleSidebarProps {
  readonly article: Article_;
}

export function ArticleSidebar({ article }: ArticleSidebarProps) {
  //  todo: put this in sidebar headings instead
  const articleHeadings = getArticleHeadings(article);

  return (
    <ArticleSidebarContainer>
      <div className={styles.container}>
        <ArticleSidebarHeadings articleHeadings={articleHeadings} />

        <ArticleSidebarLinks articleMeta={article.meta} />

        <ArticleSidebarImage meta={article.meta} />
      </div>
    </ArticleSidebarContainer>
  );
}
