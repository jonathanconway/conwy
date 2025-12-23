"use client";

import { Post } from "@/framework/client";

import { TagFilters } from "../../filters";

export interface ArticlesTagFiltersProps {
  readonly items: readonly Post[];
}

export function ArticlesTagFilters(props: ArticlesTagFiltersProps) {
  const { items } = props;

  return (
    <TagFilters contentType="article" items={items} tagField="meta.tags" />
  );
}
