import { Article as Article_ } from "@/framework/client";

import { getArticleHeadings } from "../article-headings";

import { ArticleSidebarHeadings } from "./article-sidebar-headings";
import { ArticleSidebarImage } from "./article-sidebar-image";
import { ArticleSidebarLinks } from "./article-sidebar-links";
import * as styles from "./article-sidebar.styles";

export interface ArticleSidebarProps {
  readonly article: Article_;
}

export async function ArticleSidebar({ article }: ArticleSidebarProps) {
  //  todo: put this in sidebar headings instead
  const articleHeadings = getArticleHeadings(article);

  return (
    <div className={styles.container()}>
      <ArticleSidebarHeadings articleHeadings={articleHeadings} />

      <ArticleSidebarLinks articleMeta={article.meta} />

      <ArticleSidebarImage meta={article.meta} />
    </div>
  );
}
