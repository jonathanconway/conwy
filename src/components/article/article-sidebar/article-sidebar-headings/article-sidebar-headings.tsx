"use client";

import { Section } from "../../../section";
import { ArticleHeading } from "../../article-headings";

import { useArticleSidebarHeadingsHighlighter } from "./article-sidebar-headings-highlighter.hook";
import * as styles from "./article-sidebar-headings.styles";

export interface ArticleSidebarProps {
  readonly articleHeadings: readonly ArticleHeading[];
}

export function ArticleSidebarHeadings({
  articleHeadings,
}: ArticleSidebarProps) {
  const { selectedHeadingId } =
    useArticleSidebarHeadingsHighlighter(articleHeadings);

  if (articleHeadings.length <= 2) {
    return null;
  }

  return (
    <Section label="Contents">
      <ul className={styles.list}>
        {articleHeadings.map(({ id, title, shortTitle }) => (
          <li key={id} className={styles.listItem}>
            <a
              id={`${id}-article-link`}
              href={`#${id}`}
              className={styles.link(selectedHeadingId === id)}
              title={title}
            >
              {shortTitle ?? title}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
