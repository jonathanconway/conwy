"use client";

import { get, isArray } from "lodash";

import { getAreSomeSame } from "@/framework/client";

import { ALL } from "./default-selected-tags";
import { createTagFiltersParamKey } from "./tag-filters-param-key";
import { useTagFiltersSelected } from "./use-tag-filters-selected";

export interface UseTagFiltersParams<T> {
  readonly contentType: string;
  readonly items: readonly T[];
  readonly tagField: string;
}

export function useTagFiltersResults<T>(params: UseTagFiltersParams<T>) {
  const { selectedTags } = useTagFiltersSelected(
    createTagFiltersParamKey(params),
  );

  const filteredItems = selectedTags.includes(ALL)
    ? params.items
    : params.items.filter((item) => {
        const tagFieldValue = get(item, params.tagField);
        if (isArray(tagFieldValue)) {
          return getAreSomeSame(tagFieldValue, selectedTags);
        } else {
          return selectedTags.includes(tagFieldValue);
        }
      });

  const isFiltered = !(selectedTags.includes(ALL) || selectedTags.length === 0);

  return {
    filteredItems,
    isFiltered,
  };
}
