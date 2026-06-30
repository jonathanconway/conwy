"use client";

import { IconTypes } from "@/components/icon";

import { TextBox } from "../../../text-box";

import { ChecklistSearchProps } from "./checklist-search-props";

export function ChecklistSearch(props: ChecklistSearchProps) {
  return (
    <TextBox
      value={props.value}
      onChange={props.onChange}
      placeholder="Search"
      type="search"
      icon={IconTypes.Search}
    />
  );
}
