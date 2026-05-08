import { Article as Article_ } from "@/framework/client";

import { ArticleSidebarContainer } from "./article-sidebar-container";
import { ArticleSidebarHeadings } from "./article-sidebar-headings";
import { ArticleSidebarImage } from "./article-sidebar-image";
import { ArticleSidebarLinks } from "./article-sidebar-links";
import * as styles from "./article-sidebar.css";

export interface ArticleSidebarProps {
  readonly article: Article_;
}

export function ArticleSidebar(props: ArticleSidebarProps) {
  const { article } = props;

  return (
    <ArticleSidebarContainer>
      <div className={styles.container}>
        <ArticleSidebarHeadings articleMeta={article.meta} />

        <ArticleSidebarLinks articleMeta={article.meta} />

        <ArticleSidebarImage articleMeta={article.meta} />
      </div>
    </ArticleSidebarContainer>
  );
}
