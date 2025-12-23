"use client";

import { Link } from "../../../link";
import { Section } from "../../../section";
import { ArticleHeading } from "../../article-headings";

import { useArticleSidebarHeadingsHighlighter } from "./article-sidebar-headings-highlighter.hook";
import * as styles from "./article-sidebar-headings.css";

export interface ArticleSidebarProps {
  readonly articleHeadings: readonly ArticleHeading[];
}

export function ArticleSidebarHeadings(props: ArticleSidebarProps) {
  const { articleHeadings } = props;
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
            {selectedHeadingId === id ? (
              <span className={styles.listItemSelected}>
                {shortTitle ?? title}
              </span>
            ) : (
              // todo: instead of title, apply tooltip and only show on text overflow
              <Link
                className={styles.link}
                id={`${id}-article-link`}
                href={`#${id}`}
                title={title}
              >
                {shortTitle ?? title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
