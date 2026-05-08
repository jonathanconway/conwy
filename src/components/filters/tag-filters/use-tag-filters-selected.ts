"use client";

import { useSearchParams } from "next/navigation";

import { ALL } from "./default-selected-tags";

export function useTagFiltersSelected(searchParamKey: string) {
  const searchParams = useSearchParams();

  const selectedTags = Array.from(
    searchParams.get(searchParamKey)?.split(",") ?? [ALL],
  ).filter((searchParamValue) => searchParamValue.trim() !== "");

  function setSelectedTags(newSelectedTags: readonly string[]) {
    const params = new URLSearchParams(searchParams);
    params.set(searchParamKey, newSelectedTags.join(","));
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  return {
    selectedTags,
    setSelectedTags,
  };
}
