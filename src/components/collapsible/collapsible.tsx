"use client";

import { ReactNode, useId, useRef } from "react";

import { Heading, HeadingLevels } from "../heading";
import { Icon, IconTypes } from "../icon";

import * as styles from "./collapsible.css";

interface CollapsibleProps {
  readonly title: string;
  readonly children?: ReactNode;
}

export function Collapsible(props: CollapsibleProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  return (
    <div className={styles.collapsibleContainer}>
      <input
        className={styles.checkbox}
        id={inputId}
        ref={inputRef}
        aria-hidden="true"
        type="checkbox"
      />

      <label className={styles.collapsibleHeader} htmlFor={inputId}>
        <span className={styles.title}>{props.title}</span>

        <Icon
          className={styles.expandButton}
          icon={IconTypes.ArrowChevronUp}
          size="1.5rem"
        />
        <Icon
          className={styles.collapseButton}
          icon={IconTypes.ArrowChevronDown}
          size="1.5rem"
        />
      </label>

      <div className={styles.collapsibleContent}>{props.children}</div>
    </div>
  );
}
