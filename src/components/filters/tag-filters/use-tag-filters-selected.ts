"use client";

import { useSessionStorage } from "@/framework/client";

import { DEFAULT_SELECTED_TAGS } from "./default-selected-tags";

export function useTagFiltersSelected(contentType: string) {
  const [selectedTags, setSelectedTags] = useSessionStorage(
    `conwy-${contentType}-filters`,
    DEFAULT_SELECTED_TAGS,
  );

  return {
    selectedTags,
    setSelectedTags,
  };
}
