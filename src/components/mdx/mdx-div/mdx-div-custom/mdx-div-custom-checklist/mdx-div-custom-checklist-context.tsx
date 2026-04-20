"use client";

import { ReactNode, createContext, useContext, useState } from "react";

import { ChecklistMeta, ChecklistTag } from "@/framework/client";

export interface MdxDivCustomChecklistContextProps {
  readonly checklistMeta: ChecklistMeta;

  readonly children: ReactNode;
  // readonly children: (
  //   contextValue: MdxDivCustomChecklistContextValue,
  // ) => ReactNode;
}

export interface MdxDivCustomChecklistContextValue {
  readonly checklistMeta: ChecklistMeta;

  readonly selectedFilters: readonly ChecklistTag[];
  readonly onChangeSelectedFilters: (
    selectedFilters: readonly ChecklistTag[],
  ) => void;
}

interface MdxDivCustomChecklistContextState {
  readonly selectedFilters: readonly ChecklistTag[];
}

export const MdxDivCustomChecklistContext_ = createContext<
  MdxDivCustomChecklistContextValue | undefined
>(undefined);

export const MdxDivCustomChecklistContext = (
  props: MdxDivCustomChecklistContextProps,
) => {
  const [state, setState] = useState<MdxDivCustomChecklistContextState>();

  function handleChangeSelectedFilters(
    selectedFilters: readonly ChecklistTag[],
  ) {
    setState((prevState) => ({
      ...prevState,
      selectedFilters,
    }));
  }

  const value: MdxDivCustomChecklistContextValue = {
    checklistMeta: props.checklistMeta,
    selectedFilters: state?.selectedFilters ?? [],
    onChangeSelectedFilters: handleChangeSelectedFilters,
  };

  return (
    <MdxDivCustomChecklistContext_ value={value}>
      {/* {props.children(value)} */}
      {props.children}
    </MdxDivCustomChecklistContext_>
  );
};

export const useMdxDivCustomChecklistContext = () =>
  useContext(MdxDivCustomChecklistContext_);
