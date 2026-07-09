"use client";

import { kebabCase } from "lodash";

import { Link } from "../../../link";
import { Section } from "../../../section";

import { useContentPageSidebarHeadingsHighlighter } from "./content-page-sidebar-headings-highlighter.hook";
import { CONTENT_PAGE_SIDEBAR_HEADING_ID_PREFIX } from "./content-page-sidebar-headings.const";
import * as styles from "./content-page-sidebar-headings.css";

export interface ContentPageSidebarHeadingsProps {
  readonly headings: readonly string[];
}

export function ContentPageSidebarHeadings(
  props: ContentPageSidebarHeadingsProps,
) {
  const { selectedHeadingId } = useContentPageSidebarHeadingsHighlighter(
    props.headings,
  );

  if (props.headings.length <= 2) {
    return null;
  }

  return (
    <Section label="Contents">
      <ul className={styles.list}>
        {props.headings.map((title) => {
          const id = kebabCase(title);
          return (
            <li
              key={title}
              id={`${CONTENT_PAGE_SIDEBAR_HEADING_ID_PREFIX}-${id}`}
              className={styles.listItem}
            >
              {selectedHeadingId === id ? (
                <span className={styles.listItemSelected}>{title}</span>
              ) : (
                <Link
                  className={styles.link}
                  id={`${id}-heading-link`}
                  href={`#${id}`}
                  title={title}
                >
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
