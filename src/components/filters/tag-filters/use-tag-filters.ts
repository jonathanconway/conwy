import { orderBy } from "lodash";
import { useCallback, useMemo } from "react";

import { CONTENT_TYPE_LABELS_PLURAL, sentenceCase } from "@/framework";

import { ALL_TAG } from "./default-selected-tags";
import { createTagFiltersParamKey } from "./tag-filters-param-key";
import { TagFiltersProps } from "./tag-filters-props";
import { TagFiltersTag } from "./tag-filters-tag";
import { useTagFiltersSelected } from "./use-tag-filters-selected";

type UseTagFiltersParams = TagFiltersProps;

export function useTagFilters(params: UseTagFiltersParams) {
  const title = generateTagFiltersTitle(params);

  const { selectedTagValues, setSelectedTagValues } = useTagFiltersSelected(
    createTagFiltersParamKey(params),
  );

  const onSelectTag = useCallback(
    (tag: TagFiltersTag) => {
      return () => {
        setSelectedTagValues([tag.slug]);
      };
    },
    [selectedTagValues],
  );

  const tagsBySlug = useMemo(
    () => Object.fromEntries(params.tags.map((tag) => [tag.slug, tag])),
    [params.tags],
  );

  const selectedTags = selectedTagValues.map((slug) => tagsBySlug[slug]);

  const displayTags = [ALL_TAG, ...orderBy(params.tags)];

  return {
    title,
    displayTags,
    selectedTags,
    selectedTagValues,
    onSelectTag,
  };
}

function generateTagFiltersTitle(params: UseTagFiltersParams) {
  const tagFieldLabel = sentenceCase(
    String(params.tagField.split(".").slice(-1)[0]),
  );
  const contentTypeLabelPlural = CONTENT_TYPE_LABELS_PLURAL[params.contentType];
  return `Filter ${contentTypeLabelPlural} by ${tagFieldLabel}`;
}
