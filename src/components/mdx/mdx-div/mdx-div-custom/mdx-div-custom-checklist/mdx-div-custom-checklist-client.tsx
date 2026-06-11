"use client";

import { ReactNode } from "react";

import { ChecklistMeta, cn } from "@/framework/client";

import { MDX_DIV_CUSTOM_CHECKLIST_BODY_CLASS_NAME } from "./mdx-div-custom-checklist-client.const";
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
  const bodyClassName = cn(
    styles.mdxDivCustomChecklistBody,
    MDX_DIV_CUSTOM_CHECKLIST_BODY_CLASS_NAME,
  );

  return (
    <MdxDivCustomChecklistContext checklistMeta={props.checklistMeta}>
      <MdxDivCustomChecklistHeader checklistMeta={props.checklistMeta} />

      <div className={bodyClassName}>{props.children}</div>
    </MdxDivCustomChecklistContext>
  );
}
