"use client";

import { Checklist } from "@/framework/client";

import { ContentList } from "../../content-list";

import { ChecklistsListItem } from "./checklists-list-item";

interface ChecklistsListProps {
  readonly items: readonly Checklist[];
}

export function ChecklistsList(props: ChecklistsListProps) {
  const { items } = props;

  return (
    <ContentList>
      {items
        .map((item) => (
          <ChecklistsListItem key={item.meta.slug} {...item.meta} />
        ))
        .filter(Boolean)}
    </ContentList>
  );
}
