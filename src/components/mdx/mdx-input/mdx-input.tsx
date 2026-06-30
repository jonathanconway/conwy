"use client";

import { ChecklistItemInput, useChecklistItemContext } from "../../checklist";

import { MdxInputProps } from "./mdx-input-props";

export function MdxInput(props: MdxInputProps) {
  const checklistItemContext = useChecklistItemContext();
  if (checklistItemContext) {
    return <ChecklistItemInput {...props} />;
  }

  return <input {...props} />;
}
