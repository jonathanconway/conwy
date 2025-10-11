"use client";

import { ReactNode } from "react";

import { Link } from "../../link";

import * as styles from "./text-expandable.css";
import { textExpandableOuterContainerStyles } from "./text-expandable.styles";
import { useTextExpandable } from "./use-text-expandable.hook";

interface TextExpandableProps {
  readonly children: ReactNode;
  readonly height: string;
}

export function TextExpandable(props: TextExpandableProps) {
  const textExpandable = useTextExpandable();

  if (!textExpandable.isEnabled) {
    return props.children;
  }

  return (
    <>
      <div
        ref={textExpandable.outerContainerRef}
        className={styles.textExpandableOuterContainer}
        style={textExpandableOuterContainerStyles({
          isExpanded: textExpandable.isExpanded,
          height: props.height,
        })}
      >
        <div ref={textExpandable.innerContainerRef}>{props.children}</div>
        {!textExpandable.isExpanded && (
          <span className={styles.ellipsis}>...</span>
        )}
      </div>
      <Link
        className={styles.toggleLink}
        onClick={textExpandable.handleToggleClick}
      >
        {textExpandable.isExpanded ? "Less" : "More"}
      </Link>
    </>
  );
}
