"use client";

import { ReactNode } from "react";

import { Link } from "../../link";

import * as styles from "./text-expandable.css";
import { useTextExpandable } from "./use-text-expandable.hook";

interface TextExpandableProps {
  readonly children: ReactNode;
  readonly height: string;
  readonly isEnabled?: boolean;
}

export function TextExpandable(props: TextExpandableProps) {
  const {
    isEnabled,
    isExpanded,
    outerContainerRef,
    innerContainerRef,
    handleToggleClick,
  } = useTextExpandable();

  if (!props.isEnabled || !isEnabled) {
    return props.children;
  }

  return (
    <>
      <div
        ref={outerContainerRef}
        className={styles.textExpandableOuterContainer}
        style={{
          height: isExpanded ? undefined : props.height,
        }}
      >
        <div ref={innerContainerRef}>{props.children}</div>
        {!isExpanded && <span className={styles.ellipsis}>...</span>}
      </div>
      <Link className={styles.toggleLink} onClick={handleToggleClick}>
        {isExpanded ? "Less" : "More"}
      </Link>
    </>
  );
}
