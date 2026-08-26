"use client";

import { Checklist } from "@/framework/client";

import { TagFilters } from "../../filters";

export interface ChecklistsTagFiltersProps {
  readonly items: readonly Checklist[];
}

export function ChecklistsTagFilters(props: ChecklistsTagFiltersProps) {
  const { items } = props;

  return (
    <TagFilters
      contentType="checklist"
      items={items}
      tagField="meta.checklistTags"
    />
  );
}
