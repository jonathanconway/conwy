"use client";

import { intersection } from "lodash";
import {
  ReactNode,
  createContext,
  useContext,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ChecklistMeta,
  ChecklistTag,
  getTreeLeaves,
  getTreeLeavesFiltered,
  isNotNil,
  titleCase,
} from "@/framework/client";

import { useSearchTextFilter, useTagFiltersSelected } from "../filters";

export interface ChecklistContextProps {
  readonly checklistMeta: ChecklistMeta;

  readonly children: ReactNode;
}

export interface ChecklistContextValue {
  readonly checklistMeta: ChecklistMeta;

  readonly selectedFilters: readonly ChecklistTag[];
  readonly onChangeSelectedFilters: (
    selectedFilters: readonly ChecklistTag[],
  ) => void;

  readonly searchText?: string;
  readonly onChangeSearchText: (newValue: string) => void;
}

export const ChecklistContext_ = createContext<
  ChecklistContextValue | undefined
>(undefined);

export const ChecklistContext = (props: ChecklistContextProps) => {
  const { selectedTags, setSelectedTags } = useTagFiltersSelected(
    "checklist-filter",
    [],
  );
  const { searchText, handleChangeSearchText } = useSearchTextFilter();

  function handleChangeSelectedFilters(
    selectedFilters: readonly ChecklistTag[],
  ) {
    const newSelectedTags = selectedFilters.map((filter) =>
      [filter.tagGroupName, filter.name].join("--"),
    );
    setSelectedTags(newSelectedTags);
  }

  const itemsByHeadingText = props.checklistMeta.extensions
    ?.itemsByHeadingText ?? {
    branch: "",
    children: [],
    subBranches: [],
  };

  const itemsByHeadingTextFiltered = useMemo(() => {
    let itemsFiltering = itemsByHeadingText;

    if (selectedTags.length > 0) {
      itemsFiltering = getTreeLeavesFiltered(itemsFiltering, (child) => {
        const childTags = child.tags.map(
          (tag) => `${tag.tagGroupName}--${tag.name}`,
        );

        return intersection(childTags, selectedTags).length > 0;
      });
    }

    if (searchText && searchText?.trim().length > 0) {
      const searchTextLower = searchText.toLowerCase();
      itemsFiltering = getTreeLeavesFiltered(itemsFiltering, (child) => {
        const includes = child.title.toLowerCase().includes(searchTextLower);
        return includes;
      });
    }

    return itemsFiltering;
  }, [itemsByHeadingText, selectedTags, searchText]);

  const [itemsFiltered, itemsFilteredByName] = useMemo(() => {
    const filtered = getTreeLeaves(itemsByHeadingTextFiltered);

    const filteredByName = Object.fromEntries(
      filtered.map((item) => [item.name, item]),
    );
    return [filtered, filteredByName];
  }, [itemsByHeadingTextFiltered]);

  const selectedFilters = useMemo(() => {
    if (!props.checklistMeta.extensions) {
      return [];
    }

    return selectedTags
      .map((selectedTagName: string) => {
        const [tagGroupName, tagName] = selectedTagName.split("--");
        const selectedTagGroup = props.checklistMeta.extensions?.tagGroups.find(
          (tagGroup) => tagGroup.name === tagGroupName,
        );
        if (!selectedTagGroup) {
          return;
        }

        const selectedTag = selectedTagGroup?.tags.find(
          (tag) =>
            tag.tagGroupName === selectedTagGroup.name && tag.name === tagName,
        );

        return selectedTag;
      })
      .filter(isNotNil);
  }, [selectedTags, props.checklistMeta]);

  const value: ChecklistContextValue = {
    checklistMeta: {
      ...props.checklistMeta,
      extensions: props.checklistMeta.extensions
        ? {
            ...props.checklistMeta.extensions,
            items: itemsFiltered,
            itemsByHeadingText: itemsByHeadingTextFiltered,
            itemsByName: itemsFilteredByName,
          }
        : undefined,
    },

    selectedFilters,
    onChangeSelectedFilters: handleChangeSelectedFilters,

    searchText,
    onChangeSearchText: handleChangeSearchText,
  };

  return <ChecklistContext_ value={value}>{props.children}</ChecklistContext_>;
};

export const useChecklistContext = () => useContext(ChecklistContext_);
