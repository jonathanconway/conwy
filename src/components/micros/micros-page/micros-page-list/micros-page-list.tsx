"use client";

import { Micro } from "@/framework";

import { MicrosPageListItem } from "./micros-page-list-item";
import * as styles from "./micros-page-list.css";

export interface MicrosPageListProps {
  readonly micros: readonly Micro[];
}

export function MicrosPageList(props: MicrosPageListProps) {
  const { micros } = props;

  return (
    <div className={styles.container}>
      {micros
        .map((micro) => (
          <MicrosPageListItem key={micro.meta.slug} micro={micro} />
        ))
        .filter(Boolean)}
    </div>
  );
}
