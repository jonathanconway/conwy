"use client";

import { Checklist } from "@/framework/client";

import { ContentList } from "../../content-list";
import { useTagFiltersResults } from "../../filters";

import { ChecklistsListItem } from "./checklists-list-item";

interface ChecklistsListProps {
  readonly items: readonly Checklist[];
}

export function ChecklistsList(props: ChecklistsListProps) {
  const { items } = props;

  const { filteredItems } = useTagFiltersResults({
    items,
    contentType: "checklist",
    tagField: "meta.checklistTags",
  });

  return (
    <ContentList>
      {filteredItems
        .map((item) => (
          <ChecklistsListItem key={item.meta.slug} {...item.meta} />
        ))
        .filter(Boolean)}
    </ContentList>
  );
}
