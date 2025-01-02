"use client";

import { MouseEvent, useState } from "react";

import { ListExpandableProps } from "./list-expandable.types";

type UseListExpandableParams = ListExpandableProps;

interface UseListExpandableState {
  readonly isExpanded: boolean;
}

export function useListExpandable({
  listItems,
  collapsedItemsCount = 3,
}: UseListExpandableParams) {
  const [state, setState] = useState<UseListExpandableState>({
    isExpanded: false,
  });

  const handleToggleClick = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setState({ ...state, isExpanded: !state.isExpanded });
  };

  const { isExpanded } = state;

  const shownListItems = isExpanded
    ? listItems
    : listItems.slice(0, collapsedItemsCount);

  const showMoreNumber = listItems.length - collapsedItemsCount;

  const isExpandable = listItems.length > collapsedItemsCount;

  return {
    isExpandable,
    isExpanded,
    shownListItems,
    showMoreNumber,

    handleToggleClick,
  };
}
