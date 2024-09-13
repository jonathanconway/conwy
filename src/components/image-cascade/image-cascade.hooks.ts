"use client";

import { reverse } from "lodash";
import { useState } from "react";

interface UseImageCascadeParams<T> {
  readonly items: readonly T[];
  readonly defaultSelectedItem?: T;
}

export interface UseImageCascadeResult<T> {
  readonly items: readonly T[];
  readonly selectedItem: T;
  readonly canGoPrevious: boolean;
  readonly canGoNext: boolean;
  readonly handlePreviousClick: VoidFunction;
  readonly handleNextClick: VoidFunction;
  readonly handleTabClick: (newSelectedItem: T) => () => void;
}

interface UseImageCascadeState<T> {
  readonly selectedItem: T;
}

function sortItems<T>(items: readonly T[], selectedItem: T) {
  const selectedItemIndex = items.indexOf(selectedItem);
  if (selectedItemIndex === items.length - 1) {
    return reverse(items);
  } else if (selectedItemIndex > 0) {
    return reverse([
      ...items.slice(selectedItemIndex + 1),
      ...items.slice(0, selectedItemIndex),
      selectedItem,
    ]);
  } else {
    return reverse([...items.slice(1), selectedItem]);
  }
}

export function useImageCascade<T>(params: UseImageCascadeParams<T>) {
  const [state, setState] = useState<UseImageCascadeState<T>>({
    selectedItem: params.defaultSelectedItem ?? params.items[0],
  });

  const { selectedItem } = state;

  const items = sortItems(params.items, state.selectedItem);

  const handlePreviousClick = () => {
    const selectedItemIndex = params.items.indexOf(state.selectedItem);

    const newIndex =
      selectedItemIndex === 0 ? params.items.length - 1 : selectedItemIndex - 1;

    const newSelectedItem = params.items[newIndex];

    setState({
      selectedItem: newSelectedItem,
    });
  };

  const handleNextClick = () => {
    const selectedItemIndex = params.items.indexOf(state.selectedItem);

    const newIndex =
      selectedItemIndex === params.items.length - 1 ? 0 : selectedItemIndex + 1;

    const newSelectedItem = params.items[newIndex];

    setState({
      selectedItem: newSelectedItem,
    });
  };

  const handleTabClick = (newSelectedItem: T) => () => {
    setState({
      selectedItem: newSelectedItem,
    });
  };

  return {
    items,
    selectedItem,
    handlePreviousClick,
    handleNextClick,
    handleTabClick,
  };
}
