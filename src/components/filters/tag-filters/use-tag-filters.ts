import { plural } from "pluralize";
import { useCallback } from "react";

import { sentenceCase } from "@/framework/client";

import { ALL } from "./default-selected-tags";
import { getItemsTags } from "./get-items-tags";
import { createTagFiltersParamKey } from "./tag-filters-param-key";
import { TagFiltersProps } from "./tag-filters-props";
import { useTagFiltersSelected } from "./use-tag-filters-selected";

type UseTagFiltersParams<T> = TagFiltersProps<T>;

function getTagFieldLabel<T>(params: UseTagFiltersParams<T>) {
  return sentenceCase(String(params.tagField.split(".").slice(-1)[0]));
}

export function useTagFilters<T>(params: UseTagFiltersParams<T>) {
  const title = `Filter ${plural(params.contentType)} by ${getTagFieldLabel(params)}`;

  const { selectedTags, setSelectedTags } = useTagFiltersSelected(
    createTagFiltersParamKey(params),
  );

  const allTags = getItemsTags(params);

  const onSelectTag = useCallback(
    (tag: string) => {
      return () => {
        setSelectedTags([tag]);
      };
    },
    [selectedTags],
  );

  const displayTags = [ALL, ...allTags];

  return {
    title,
    displayTags,
    allTags,
    selectedTags,
    onSelectTag,
  };
}
