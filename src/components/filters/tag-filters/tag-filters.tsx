"use client";

import { cn } from "@/framework";

import { MobileCollapsible } from "../../mobile";

import { TagFiltersProps } from "./tag-filters-props";
import * as styles from "./tag-filters.css";
import { useTagFilters } from "./use-tag-filters";

export function TagFilters(props: TagFiltersProps) {
  const { title, displayTags, selectedTagValues, onSelectTag } =
    useTagFilters(props);

  return (
    <MobileCollapsible title={title} collapsible={props.collapsible}>
      <div className={styles.container} aria-description={title}>
        {displayTags.map((tag) => {
          const isSelected = selectedTagValues.includes(tag.slug);

          return (
            <span
              key={tag.slug}
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
                {tag.title}
              </span>
            </span>
          );
        })}
      </div>
    </MobileCollapsible>
  );
}
