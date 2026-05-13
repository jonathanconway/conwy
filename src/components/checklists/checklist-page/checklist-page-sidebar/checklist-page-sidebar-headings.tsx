"use client";

import { kebabCase } from "lodash";

import { ChecklistMeta } from "@/framework/client";

import { Link } from "../../../link";
import { Section } from "../../../section";

import { useChecklistPageSidebarHeadingsHighlighter } from "./checklist-page-sidebar-headings-highlighter.hook";
import * as styles from "./checklist-page-sidebar-headings.css";

export interface ChecklistPageSidebarHeadingsProps {
  readonly checklistMeta: ChecklistMeta;
}

export function ChecklistPageSidebarHeadings(
  props: ChecklistPageSidebarHeadingsProps,
) {
  const checklistHeadings =
    props.checklistMeta.extensions?.itemsByHeadingText.subBranches.map(
      (subBranch) => subBranch.branch,
    ) ?? [];
  const checklistPageHeadings = [...checklistHeadings, "Resources"];

  const { selectedHeadingId } = useChecklistPageSidebarHeadingsHighlighter(
    checklistPageHeadings,
  );

  if (checklistPageHeadings.length <= 2) {
    return null;
  }

  return (
    <Section label="Contents">
      <ul className={styles.list}>
        {checklistPageHeadings.map((title) => {
          const id = kebabCase(title);
          return (
            <li key={title} className={styles.listItem}>
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
