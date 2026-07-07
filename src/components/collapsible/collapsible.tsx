"use client";

import { isString } from "lodash";
import { ReactNode, useId, useRef } from "react";

import { Icon, IconTypes } from "../icon";
import { Text, TextTypes } from "../text";

import * as styles from "./collapsible.css";

interface CollapsibleProps {
  readonly title: ReactNode;
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
        {isString(props.title) ? (
          <Text type={TextTypes.CollapsibleTitle}>{props.title}</Text>
        ) : (
          props.title
        )}

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
