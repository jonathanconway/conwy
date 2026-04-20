"use client";

import { Checkbox, CheckboxBaseColors } from "../../../checkbox";

import { ChecklistItemInputProps } from "./checklist-item-input-props";

export function ChecklistItemInput(props: ChecklistItemInputProps) {
  const { disabled, onChange, ...restProps } = props;
  return <Checkbox baseColor={CheckboxBaseColors.Yellow} {...restProps} />;
}
