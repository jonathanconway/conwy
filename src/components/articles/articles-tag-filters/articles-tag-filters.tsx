"use client";

import { Post, getItemsTags } from "@/framework/client";

import { MobileCollapsible } from "../../mobile";

import { ALL } from "./articles-tag-filters.const";
import * as styles from "./articles-tag-filters.styles";
import { useTagFiltersSwitch } from "./use-articles-tag-filters-switch.hook";

export interface ArticlesTagFiltersProps {
  readonly items: readonly Post[];
}

function sentenceCase(input: string) {
  return input.split("-").join(" ").toLowerCase();
}

export function ArticlesTagFilters({ items }: ArticlesTagFiltersProps) {
  const allTags = getItemsTags(items);
  const tags = [ALL, ...allTags];

  const { selectedTags, onSelectTag } = useTagFiltersSwitch(allTags);

  return (
    <MobileCollapsible title="Filter articles by tag">
      <div
        className={styles.container}
        aria-description="Filter articles by tag"
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className={styles.tagFilter}
            aria-description="Filter tag"
            onClick={onSelectTag(tag)}
          >
            <span
              className={styles.tagFilterBox(selectedTags.includes(tag))}
            ></span>
            <span className={styles.tagFilterLabel}>{sentenceCase(tag)}</span>
          </span>
        ))}
      </div>
    </MobileCollapsible>
  );
}
