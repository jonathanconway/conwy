"use client";

import { orderBy } from "lodash";
import { useMemo } from "react";

import { Button } from "../../../button";
import { Collapsible } from "../../../collapsible";
import { FilterGroup, Filters } from "../../../filters";
import { Filter } from "../../../filters/filters-props";
import { TwoColLayout } from "../../../layouts";

import { ChecklistFiltersProps } from "./checklist-filters-props";
import * as styles from "./checklist-filters.css";

export function ChecklistFilters(props: ChecklistFiltersProps) {
  const allTags = props.tagGroups.flatMap((tagGroup) => tagGroup.tags);

  const tagGroupsWithItemsOrdered = useMemo(
    () =>
      props.tagGroups.map((tagGroup) => ({
        ...tagGroup,
        tags: orderBy(tagGroup.tags, (tag) => tag.title),
      })),
    [props.tagGroups],
  );

  function handleChange(selectedFilters: readonly Filter[]) {
    const selectedTags = allTags.filter((tag) => selectedFilters.includes(tag));
    props.onChange(selectedTags);
  }

  function handleClearClick() {
    props.onChange([]);
  }

  return (
    <Collapsible title={`Filter by tag (${props.selectedTags.length})`}>
      <div className={styles.container}>
        <TwoColLayout justifyContent="space-between">
          <span></span>
          <Button onClick={handleClearClick}>Clear</Button>
        </TwoColLayout>

        {tagGroupsWithItemsOrdered.map((tagGroup) => (
          <FilterGroup
            key={tagGroup.name}
            title={tagGroup.title}
            filters={tagGroup.tags}
            selectedFilters={props.selectedTags}
            onChange={handleChange}
          >
            <Filters
              key={tagGroup.title}
              filters={tagGroup.tags}
              selectedFilters={props.selectedTags}
              title={tagGroup.title}
              onChange={handleChange}
            />
          </FilterGroup>
        ))}
      </div>
    </Collapsible>
  );
}
