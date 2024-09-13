"use client";

import { ReactNode } from "react";

import { Link } from "../../link";

import * as styles from "./text-expandable.styles";
import { useTextExpandable } from "./use-text-expandable.hook";

interface TextExpandableProps {
  readonly children: ReactNode;
  readonly height: string;
}
export function TextExpandable(props: TextExpandableProps) {
  const {
    isEnabled,
    isExpanded,
    outerContainerRef,
    innerContainerRef,
    handleToggleClick,
  } = useTextExpandable();

  if (!isEnabled) {
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
        <div
          ref={innerContainerRef}
          className={styles.textExpandableInnerContainer}
        >
          {props.children}
        </div>
      </div>

      <Link className={styles.toggleLink} onClick={handleToggleClick}>
        {isExpanded ? "Less" : "More"}
      </Link>
    </>
  );
}
