import { uniq, without } from "lodash";

import { LocalStorageKeys } from "@/app/local-storage-keys";
import { getAreAllSame, useSessionStorage } from "@/framework/client";

import { ALL } from "./tag-filters.const";

const DEFAULT_SELECTED_TAGS = [ALL];

export function useTagFiltersSwitch(allTags: readonly string[]) {
  const [selectedTags, setSelectedTags] = useSessionStorage(
    LocalStorageKeys.ArticleFilterTags,
    DEFAULT_SELECTED_TAGS,
  );

  function onSelectTag(tag: string) {
    return () => {
      if (tag === ALL) {
        setSelectedTags(DEFAULT_SELECTED_TAGS);
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

  return {
    selectedTags,
    onSelectTag,
  };
}
