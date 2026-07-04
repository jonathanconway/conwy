"use client";

import { useSearchParams } from "next/navigation";

import { ALL } from "./default-selected-tags";

export function useTagFiltersSelected(
  searchParamKey: string,
  defaultFilters = [ALL],
) {
  const searchParams = useSearchParams();

  const selectedTags = Array.from(
    searchParams.get(searchParamKey)?.split(",") ?? defaultFilters,
  ).filter((searchParamValue) => searchParamValue.trim() !== "");

  function setSelectedTags(newSelectedTags: readonly string[]) {
    const params = new URLSearchParams(searchParams);
    if (newSelectedTags.length === 0) {
      params.delete(searchParamKey);
    } else {
      params.set(searchParamKey, newSelectedTags.join(","));
    }
    window.history.pushState(
      null,
      "",
      `?${params.toString()}${window.location.hash}`,
    );
  }

  return {
    selectedTags,
    setSelectedTags,
  };
}
