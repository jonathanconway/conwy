"use client";

import { max, min } from "lodash";
import { useState } from "react";

interface UseCarouselParams<T> {
  readonly items: readonly T[];
  readonly defaultSelectedItem?: T;
}

export interface UseCarouselResult<T> {
  readonly items: readonly T[];
  readonly selectedItem: T;
  readonly canGoPrevious: boolean;
  readonly canGoNext: boolean;
  readonly handlePreviousClick: VoidFunction;
  readonly handleNextClick: VoidFunction;
  readonly handleTabClick: (newSelectedItem: T) => () => void;
}

interface UseCarouselState<T> {
  readonly selectedItem: T;
}

export function useCarousel<T>(params: UseCarouselParams<T>) {
  const { items } = params;

  const [state, setState] = useState<UseCarouselState<T>>({
    selectedItem: params.defaultSelectedItem ?? params.items[0],
  });

  const { selectedItem } = state;

  const canGoPrevious = params.items.indexOf(state.selectedItem) > 0;
  const canGoNext =
    params.items.indexOf(state.selectedItem) < params.items.length - 1;

  const handlePreviousClick = () => {
    const newIndex =
      max([params.items.indexOf(state.selectedItem) - 1, 0]) ?? 0;

    const newSelectedItem = params.items[newIndex];

    setState({
      selectedItem: newSelectedItem,
    });
  };

  const handleNextClick = () => {
    const newIndex =
      min([
        params.items.indexOf(state.selectedItem) + 1,
        params.items.length - 1,
      ]) ?? params.items.length - 1;

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
    canGoPrevious,
    canGoNext,
    handlePreviousClick,
    handleNextClick,
    handleTabClick,
  };
}
