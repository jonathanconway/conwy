"use client";

import { IconTypes } from "../../icon";
import { Link } from "../../link";

import * as styles from "./list-expandable.css";
import { ListExpandableProps } from "./list-expandable.types";
import { useListExpandable } from "./use-list-expandable.hook";

export function ListExpandable(props: ListExpandableProps) {
  const {
    isExpandable,
    isExpanded,
    showMoreNumber,
    shownListItems,
    handleToggleClick,
  } = useListExpandable(props);

  const linkLabel = isExpanded ? "Show Less" : `Show ${showMoreNumber} More`;
  const linkIcon = isExpanded
    ? IconTypes.ArrowChevronUp
    : IconTypes.ArrowChevronDown;

  return (
    <>
      {shownListItems}

      {isExpandable && (
        <Link
          className={styles.toggleLink}
          onClick={handleToggleClick}
          icon={linkIcon}
        >
          {linkLabel}
        </Link>
      )}
    </>
  );
}
