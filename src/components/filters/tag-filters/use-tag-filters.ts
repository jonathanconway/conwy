import { uniq, without } from "lodash";
import { plural } from "pluralize";

import { getAreAllSame } from "@/framework/client";

import { ALL, DEFAULT_SELECTED_TAGS } from "./default-selected-tags";
import { getItemsTags } from "./get-items-tags";
import { TagFiltersProps } from "./tag-filters-props";
import { useTagFiltersSelected } from "./use-tag-filters-selected";

type UseTagFiltersParams<T> = TagFiltersProps<T>;

function sentenceCase(input: string) {
  return input.split("-").join(" ").toLowerCase();
}

function getTagFieldLabel<T>(params: UseTagFiltersParams<T>) {
  return sentenceCase(String(params.tagField.split(".").slice(-1)[0]));
}

export function useTagFilters<T>(params: UseTagFiltersParams<T>) {
  const title = `Filter ${plural(params.contentType)} by ${getTagFieldLabel(params)}`;

  const { selectedTags, setSelectedTags } = useTagFiltersSelected(
    params.contentType,
  );

  const allTags = getItemsTags(params);

  function onSelectTag(tag: string) {
    return () => {
      if (tag === ALL) {
        setSelectedTags([ALL]);
        return;
      }

      if (getAreAllSame(selectedTags, allTags)) {
        setSelectedTags([tag]);
        return;
      }

      if (selectedTags.includes(tag)) {
        const selectedTagsWithoutTagOrAll = without(
          uniq([...selectedTags, tag]),
          ALL,
          tag,
        );
        if (selectedTagsWithoutTagOrAll.length === 0) {
          setSelectedTags(DEFAULT_SELECTED_TAGS);
        } else {
          setSelectedTags(selectedTagsWithoutTagOrAll);
        }
        return;
      }
      setSelectedTags(without(uniq([...selectedTags, tag]), ALL));
    };
  }

  const displayTags = ["All", ...allTags];

  return {
    title,
    displayTags,
    allTags,
    selectedTags,
    onSelectTag,
  };
}
