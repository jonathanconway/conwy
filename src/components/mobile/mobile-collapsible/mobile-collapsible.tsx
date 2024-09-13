"use client";

import { cn } from "@jonathanconway/tailwindjs";
import { ReactNode, useId, useRef } from "react";

import { Heading } from "../../heading";
import { Icon, IconTypes } from "../../icon";

import moduleStyles from "./mobile-collapsible.module.css";
import * as styles from "./mobile-collapsible.styles";

interface MobileCollapsibleProps {
  readonly title: string;
  readonly children?: ReactNode;
}

export function MobileCollapsible(props: MobileCollapsibleProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  return (
    <div className={styles.mobileCollapsibleContainer}>
      <input
        id={inputId}
        ref={inputRef}
        className={moduleStyles.checkbox}
        aria-hidden="true"
        type="checkbox"
      />

      <label
        className={cn(moduleStyles.header, styles.header)}
        htmlFor={inputId}
      >
        <Heading level={3} className={styles.title}>
          {props.title}
        </Heading>

        <Icon
          className={cn(moduleStyles.expandButton, styles.expandCollapseButton)}
          icon={IconTypes.ArrowChevronUp}
          size="2rem"
        />
        <Icon
          className={cn(
            moduleStyles.collapseButton,
            styles.expandCollapseButton,
          )}
          icon={IconTypes.ArrowChevronDown}
          size="2rem"
        />
      </label>

      <div className={cn(moduleStyles.content, styles.content)}>
        {props.children}
      </div>
    </div>
  );
}
