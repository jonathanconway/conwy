"use client";

import { useChecklistContext } from "../../checklist/checklist-context";
import { ListUnordered } from "../../list";

import { MdxUlChecklist, checkIsChecklist } from "./mdx-ul-checklist";
import { MdxUlProps } from "./mdx-ul-props";

export function MdxUl(props: MdxUlProps) {
  const { className, ...restProps } = props;

  const checklistContext = useChecklistContext();
  if (checklistContext && checkIsChecklist(props)) {
    return <MdxUlChecklist>{props.children}</MdxUlChecklist>;
  }

  return <ListUnordered {...restProps} />;
}
