"use client";

import { get, isArray } from "lodash";

import { getAreSomeSame } from "@/framework/client";

import { ALL } from "./default-selected-tags";
import { useTagFiltersSelected } from "./use-tag-filters-selected";

export interface UseTagFiltersParams<T> {
  readonly contentType: string;
  readonly items: readonly T[];
  readonly tagField: string;
}

export function useTagFiltersResults<T>(params: UseTagFiltersParams<T>) {
  const { selectedTags } = useTagFiltersSelected(params.contentType);

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

  return {
    filteredItems,
  };
}
