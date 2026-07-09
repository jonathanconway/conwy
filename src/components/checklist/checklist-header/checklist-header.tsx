"use client";

import { Breakpoints } from "@/components/styling";

import { ItemsCount } from "../../items-count";
import { ResponsiveStack } from "../../responsive";
import { Stack, StackDirections, StackDistributions } from "../../stack";
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

  const itemsCount =
    checklistContext.checklistMeta.extensions?.items.length ?? 0;

  return (
    <Stack gap={3}>
      <Stack>
        <ResponsiveStack
          direction={{
            [Breakpoints.Small]: StackDirections.Column,
            [Breakpoints.Medium]: StackDirections.Row,
            [Breakpoints.Large]: StackDirections.Row,
          }}
          distribution={{
            [Breakpoints.Small]: StackDistributions.Flow,
            [Breakpoints.Medium]: StackDistributions.Even,
            [Breakpoints.Large]: StackDistributions.Even,
          }}
        >
          <ChecklistDownload checklistMeta={props.checklistMeta} />
          <ChecklistSearch
            value={checklistContext.searchText ?? ""}
            onChange={checklistContext.onChangeSearchText}
          />
        </ResponsiveStack>

        {props.checklistMeta.extensions &&
          props.checklistMeta.extensions.tagGroups.length > 0 && (
            <ChecklistFilters
              tagGroups={props.checklistMeta.extensions.tagGroups}
              selectedTags={checklistContext.selectedFilters}
              onChange={checklistContext.onChangeSelectedFilters}
            />
          )}
      </Stack>

      <div>
        <ItemsCount count={itemsCount} />
      </div>
    </Stack>
  );
}
