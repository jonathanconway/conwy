"use client";

import { GroupProps } from "./group-props";
import * as styles from "./group.css";

export function Group(props: GroupProps) {
  return (
    <fieldset className={styles.groupContainer}>
      <legend className={styles.groupTitle}>{props.title}</legend>

      {props.children}
    </fieldset>
  );
}
