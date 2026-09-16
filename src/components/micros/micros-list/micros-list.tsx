"use client";

import { Micro } from "@/framework/client";

import { MicrosListItem } from "./micros-list-item";
import * as styles from "./micros-list.css";

export interface MicrosListProps {
  readonly micros: readonly Micro[];
}

export function MicrosList(props: MicrosListProps) {
  const { micros } = props;

  return (
    <div className={styles.container}>
      {micros
        .map((micro) => <MicrosListItem key={micro.meta.slug} micro={micro} />)
        .filter(Boolean)}
    </div>
  );
}
