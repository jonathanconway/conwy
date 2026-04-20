"use client";

import { ReactNode } from "react";

import { ChecklistMeta } from "@/framework/client";

import { MdxDivCustomChecklistContext } from "./mdx-div-custom-checklist-context";
import { MdxDivCustomChecklistHeader } from "./mdx-div-custom-checklist-header/mdx-div-custom-checklist-header";
import * as styles from "./mdx-div-custom-checklist.css";

interface MdxDivCustomChecklistClientProps {
  readonly checklistMeta: ChecklistMeta;
  readonly children: ReactNode;
}

export function MdxDivCustomChecklistClient(
  props: MdxDivCustomChecklistClientProps,
) {
  return (
    <MdxDivCustomChecklistContext checklistMeta={props.checklistMeta}>
      <MdxDivCustomChecklistHeader checklistMeta={props.checklistMeta} />

      <div className={styles.mdxDivCustomChecklistBody}>{props.children}</div>
    </MdxDivCustomChecklistContext>
  );
}
