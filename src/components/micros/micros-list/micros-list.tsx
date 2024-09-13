"use client";

import { MicroMeta } from "@/framework/client";

import { MicroListItem } from "../micro-list-item";

import * as styles from "./micros-list.styles";

export interface MicrosListProps {
  readonly microMetas: readonly MicroMeta[];
}

export function MicrosList({ microMetas }: MicrosListProps) {
  return (
    <div className={styles.container()}>
      {microMetas
        .map((microMeta) => (
          <MicroListItem key={microMeta.slug} microMeta={microMeta} />
        ))
        .filter(Boolean)}
    </div>
  );
}
