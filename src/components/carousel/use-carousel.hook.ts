"use client";

import { max, min } from "lodash";
import { useState } from "react";

import { CarouselItem } from "./carousel-item";

interface UseCarouselParams<TCarouselItem extends CarouselItem = CarouselItem> {
  readonly items: readonly TCarouselItem[];
  readonly defaultItem?: TCarouselItem;
}

export interface UseCarouselResult<
  TCarouselItem extends CarouselItem = CarouselItem,
> {
  readonly items: readonly TCarouselItem[];
  readonly selectedItem: TCarouselItem;
  readonly canGoPrevious: boolean;
  readonly canGoNext: boolean;
  readonly handlePreviousClick: VoidFunction;
  readonly handleNextClick: VoidFunction;
  readonly handleTabClick: (newSelectedItem: TCarouselItem) => () => void;
}

interface UseCarouselState {
  readonly selectedIndex: number;
}

export function useCarousel<TCarouselItem extends CarouselItem = CarouselItem>(
  params: UseCarouselParams<TCarouselItem>,
) {
  const { items } = params;

  const [state, setState] = useState<UseCarouselState>({
    selectedIndex: params.defaultItem ? items.indexOf(params.defaultItem) : 0,
  });

  const { selectedIndex } = state;

  const selectedItem = params.items[selectedIndex];

  const canGoPrevious = selectedIndex > 0;
  const canGoNext = selectedIndex < params.items.length - 1;

  const handlePreviousClick = () => {
    const newSelectedIndex = max([selectedIndex - 1, 0]) ?? 0;

    setState({
      selectedIndex: newSelectedIndex,
    });
  };

  const handleNextClick = () => {
    const newSelectedIndex =
      min([selectedIndex + 1, params.items.length - 1]) ??
      params.items.length - 1;

    setState({
      selectedIndex: newSelectedIndex,
    });
  };

  const handleTabClick = (newSelectedItem: TCarouselItem) => () => {
    setState({
      selectedIndex: params.items.indexOf(newSelectedItem),
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
