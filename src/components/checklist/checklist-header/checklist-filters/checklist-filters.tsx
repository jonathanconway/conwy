"use client";

import { orderBy } from "lodash";
import { useMemo } from "react";

import { Button } from "../../../button";
import { Collapsible } from "../../../collapsible";
import { Filters } from "../../../filters";
import { Group } from "../../../group";
import { TwoColLayout } from "../../../layouts";

import { ChecklistFiltersProps } from "./checklist-filters-props";
import * as styles from "./checklist-filters.css";

export function ChecklistFilters(props: ChecklistFiltersProps) {
  const tagGroupsWithItemsOrdered = useMemo(
    () =>
      props.tagGroups.map((tagGroup) => ({
        ...tagGroup,
        tags: orderBy(tagGroup.tags, (tag) => tag.title),
      })),
    [props.tagGroups],
  );

  function handleChange(selectedFilters: readonly string[]) {
    const selectedTags = props.tagGroups
      .flatMap((tagGroup) => tagGroup.tags)
      .filter((tag) => selectedFilters.includes(tag.title));
    props.onChange(selectedTags);
  }

  function handleClearClick() {
    props.onChange([]);
  }

  return (
    <Collapsible title="Filter by Tag">
      <div className={styles.container}>
        <TwoColLayout justifyContent="space-between">
          <span></span>
          <Button onClick={handleClearClick}>Clear</Button>
        </TwoColLayout>

        {tagGroupsWithItemsOrdered.map((tagGroup) => (
          <Group key={tagGroup.name} title={tagGroup.title}>
            <Filters
              key={tagGroup.title}
              filters={tagGroup.tags.map((tag) => tag.title)}
              selectedFilters={props.selectedTags.map((tag) => tag.title)}
              title={tagGroup.title}
              onChange={handleChange}
            />
          </Group>
        ))}
      </div>
    </Collapsible>
  );
}
