"use client";

import { Post } from "@/framework/client";

import { TagFilters } from "../../filters";

export interface ArticlesTagFiltersProps {
  readonly items: readonly Post[];
}

export function ArticlesTagFilters({ items }: ArticlesTagFiltersProps) {
  return (
    <TagFilters contentType="article" items={items} tagField="meta.tags" />
  );
}
