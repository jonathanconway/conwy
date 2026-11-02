"use client";

import { ReactNode, useId, useRef } from "react";

import { Heading, HeadingLevels } from "../../heading";
import { Icon, IconTypes } from "../../icon";

import * as styles from "./mobile-collapsible.css";

interface MobileCollapsibleProps {
  readonly title: string;
  readonly children?: ReactNode;
  readonly collapsible?: boolean;
}

export function MobileCollapsible(props: MobileCollapsibleProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  return (
    <div className={styles.mobileCollapsibleContainer}>
      <input
        className={styles.checkbox}
        id={inputId}
        ref={inputRef}
        aria-hidden="true"
        type="checkbox"
      />

      <label className={styles.header} htmlFor={inputId}>
        <div className={styles.title}>{props.title}</div>

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

      <div className={styles.content}>{props.children}</div>
    </div>
  );
}
