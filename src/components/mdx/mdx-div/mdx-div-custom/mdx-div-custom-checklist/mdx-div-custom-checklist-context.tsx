"use client";

import { ReactNode, createContext, useContext, useState } from "react";

import {
  ChecklistMeta,
  ChecklistTag,
  isNotNil,
  titleCase,
} from "@/framework/client";

import { useTagFiltersSelected } from "../../../../filters";

export interface MdxDivCustomChecklistContextProps {
  readonly checklistMeta: ChecklistMeta;

  readonly children: ReactNode;
}

export interface MdxDivCustomChecklistContextValue {
  readonly checklistMeta: ChecklistMeta;

  readonly selectedFilters: readonly ChecklistTag[];
  readonly onChangeSelectedFilters: (
    selectedFilters: readonly ChecklistTag[],
  ) => void;
}

export const MdxDivCustomChecklistContext_ = createContext<
  MdxDivCustomChecklistContextValue | undefined
>(undefined);

export const MdxDivCustomChecklistContext = (
  props: MdxDivCustomChecklistContextProps,
) => {
  const { selectedTags, setSelectedTags } =
    useTagFiltersSelected("checklist-filter");

  function handleChangeSelectedFilters(
    selectedFilters: readonly ChecklistTag[],
  ) {
    const newSelectedTags = selectedFilters.map((filter) =>
      [filter.tagGroupName, filter.name].join("--"),
    );
    setSelectedTags(newSelectedTags);
  }

  const value: MdxDivCustomChecklistContextValue = {
    checklistMeta: props.checklistMeta,
    selectedFilters: selectedTags
      .map((selectedTag) => {
        if (selectedTag === "all") {
          return;
        }
        const [tagGroupName, name] = selectedTag.split("--");
        return { tagGroupName, name, title: titleCase(name) };
      })
      .filter(isNotNil),
    onChangeSelectedFilters: handleChangeSelectedFilters,
  };

  return (
    <MdxDivCustomChecklistContext_ value={value}>
      {props.children}
    </MdxDivCustomChecklistContext_>
  );
};

export const useMdxDivCustomChecklistContext = () =>
  useContext(MdxDivCustomChecklistContext_);
