"use client";

import { useSearchParams } from "next/navigation";

import { ALL } from "./default-selected-tags";

export function useTagFiltersSelected(
  searchParamKey: string,
  defaultFilters = [ALL],
) {
  const searchParams = useSearchParams();

  const selectedTagValues = Array.from(
    searchParams.get(searchParamKey)?.split(",") ?? defaultFilters,
  ).filter((searchParamValue) => searchParamValue.trim() !== "");

  function setSelectedTagValues(newSelectedTagValues: readonly string[]) {
    const params = new URLSearchParams(searchParams);

    if (newSelectedTagValues.length === 0) {
      params.delete(searchParamKey);
    } else {
      params.set(searchParamKey, newSelectedTagValues.join(","));
    }

    window.history.pushState(
      null,
      "",
      `?${params.toString()}${window.location.hash}`,
    );
  }

  return {
    selectedTagValues,
    setSelectedTagValues,
  };
}
