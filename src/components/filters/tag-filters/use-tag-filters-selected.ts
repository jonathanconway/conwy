"use client";

import { kebabCase } from "lodash";
import { useSearchParams } from "next/navigation";

import { ALL } from "./default-selected-tags";

export function useTagFiltersSelected(searchParamKey: string) {
  const searchParams = useSearchParams();

  const selectedTags = Array.from(
    searchParams.get(searchParamKey)?.split(",") ?? [ALL],
  );

  function setSelectedTags(newSelectedTags: readonly string[]) {
    const params = new URLSearchParams(searchParams);
    params.set(searchParamKey, newSelectedTags.map(kebabCase).join(","));
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  return {
    selectedTags,
    setSelectedTags,
  };
}
