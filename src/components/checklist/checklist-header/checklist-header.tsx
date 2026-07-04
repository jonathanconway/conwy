"use client";

import { Stack, StackDirections } from "../../stack";
import { useChecklistContext } from "../checklist-context";

import { ChecklistDownload } from "./checklist-download";
import { ChecklistFilters } from "./checklist-filters";
import { ChecklistHeaderProps } from "./checklist-header-props";
import { ChecklistSearch } from "./checklist-search";

export function ChecklistHeader(props: ChecklistHeaderProps) {
  const checklistContext = useChecklistContext();
  if (!checklistContext) {
    return null;
  }

  return (
    <Stack>
      <Stack direction={StackDirections.Row}>
        <ChecklistDownload checklistMeta={props.checklistMeta} />
        <ChecklistSearch
          value={checklistContext.searchText ?? ""}
          onChange={checklistContext.onChangeSearchText}
        />
      </Stack>

      {props.checklistMeta.extensions &&
        props.checklistMeta.extensions.tagGroups.length > 0 && (
          <ChecklistFilters
            tagGroups={props.checklistMeta.extensions.tagGroups}
            selectedTags={checklistContext.selectedFilters}
            onChange={checklistContext.onChangeSelectedFilters}
          />
        )}
    </Stack>
  );
}
