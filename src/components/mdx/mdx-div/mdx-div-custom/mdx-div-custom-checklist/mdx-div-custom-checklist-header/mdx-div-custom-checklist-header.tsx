"use client";

import { ChecklistDownload, ChecklistFilters } from "../../../../../checklist";
import { Stack } from "../../../../../stack";
import { useMdxDivCustomChecklistContext } from "../mdx-div-custom-checklist-context";

import { MdxDivCustomChecklistHeaderProps } from "./mdx-div-custom-checklist-header-props";

export function MdxDivCustomChecklistHeader(
  props: MdxDivCustomChecklistHeaderProps,
) {
  const mdxDivCustomChecklistContext = useMdxDivCustomChecklistContext();
  if (!mdxDivCustomChecklistContext) {
    return null;
  }

  return (
    <Stack>
      <ChecklistDownload checklistMeta={props.checklistMeta} />

      {props.checklistMeta.extensions && (
        <ChecklistFilters
          tagGroups={props.checklistMeta.extensions.tagGroups}
          selectedTags={mdxDivCustomChecklistContext.selectedFilters}
          onChange={mdxDivCustomChecklistContext.onChangeSelectedFilters}
        />
      )}
    </Stack>
  );
}
