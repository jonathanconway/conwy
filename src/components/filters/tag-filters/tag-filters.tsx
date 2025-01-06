"use client";

import { cn, sentenceCase } from "@/framework/client";

import { MobileCollapsible } from "../../mobile";

import { TagFiltersProps } from "./tag-filters-props";
import * as styles from "./tag-filters.css";
import { useTagFilters } from "./use-tag-filters";

export function TagFilters<T>(props: TagFiltersProps<T>) {
  const { title, displayTags, selectedTags, onSelectTag } =
    useTagFilters(props);

  return (
    <MobileCollapsible title={title}>
      <div className={styles.container} aria-description={title}>
        {displayTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);

          return (
            <span
              key={tag}
              className={styles.tagFilter}
              aria-description="Filter tag"
              onClick={onSelectTag(tag)}
            >
              <span
                className={cn(
                  styles.tagFilterBox,
                  isSelected ? styles.tagFilterBoxSelected : undefined,
                )}
              />
              <span
                className={cn(
                  styles.tagFilterLabel,
                  isSelected ? styles.tagFilterLabelSelected : undefined,
                )}
              >
                {sentenceCase(tag)}
              </span>
            </span>
          );
        })}
      </div>
    </MobileCollapsible>
  );
}
