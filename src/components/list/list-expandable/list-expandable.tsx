"use client";

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

  return (
    <>
      <div>{shownListItems}</div>

      {isExpandable && (
        <Link className={styles.toggleLink} onClick={handleToggleClick}>
          {isExpanded ? "Show Less" : `Show ${showMoreNumber} More`}
        </Link>
      )}
    </>
  );
}
