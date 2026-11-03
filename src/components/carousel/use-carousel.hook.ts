"use client";

import { max, min } from "lodash";
import {
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  useState,
} from "react";

import { KeyboardKeys } from "@/framework";

import { CarouselItem } from "./carousel-item";

interface UseCarouselParams<TCarouselItem extends CarouselItem = CarouselItem> {
  readonly items: readonly TCarouselItem[];
  readonly defaultItem?: TCarouselItem;

  readonly onTabSelect?: (newSelectedItem: TCarouselItem) => void;
}

export interface UseCarouselResult<
  TCarouselItem extends CarouselItem = CarouselItem,
> {
  readonly items: readonly TCarouselItem[];
  readonly selectedItem: TCarouselItem;
  readonly canGoPrevious: boolean;
  readonly canGoNext: boolean;

  readonly handlePreviousClick: MouseEventHandler;
  readonly handleNextClick: MouseEventHandler;
  readonly handleTabClick: (
    newSelectedItem: TCarouselItem,
  ) => MouseEventHandler;
  readonly handleKeyDown: KeyboardEventHandler;

  readonly goPrevious: VoidFunction;
  readonly goNext: VoidFunction;
}

interface UseCarouselState {
  readonly selectedIndex: number;
}

export function useCarousel<TCarouselItem extends CarouselItem = CarouselItem>(
  params: UseCarouselParams<TCarouselItem>,
): UseCarouselResult<TCarouselItem> {
  const { items, onTabSelect } = params;

  const [state, setState] = useState<UseCarouselState>({
    selectedIndex: params.defaultItem ? items.indexOf(params.defaultItem) : 0,
  });

  const { selectedIndex } = state;

  const selectedItem = params.items[selectedIndex];

  const canGoPrevious = selectedIndex > 0;
  const canGoNext = selectedIndex < params.items.length - 1;

  function goPrevious() {
    const newSelectedIndex = max([selectedIndex - 1, 0]) ?? 0;

    setState({
      selectedIndex: newSelectedIndex,
    });

    onTabSelect?.(items[newSelectedIndex]);
  }

  function goNext() {
    const newSelectedIndex =
      min([selectedIndex + 1, params.items.length - 1]) ??
      params.items.length - 1;

    setState({
      selectedIndex: newSelectedIndex,
    });

    onTabSelect?.(items[newSelectedIndex]);
  }

  const handlePreviousClick = () => {
    goPrevious();
  };

  function handleNextClick() {
    goNext();
  }

  const handleTabClick = (newSelectedItem: TCarouselItem) => () => {
    const newSelectedIndex = params.items.indexOf(newSelectedItem);

    setState({
      selectedIndex: newSelectedIndex,
    });

    onTabSelect?.(items[newSelectedIndex]);
  };

  function handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case KeyboardKeys.ArrowLeft:
        goPrevious();
        break;
      case KeyboardKeys.ArrowRight:
        goNext();
        break;
    }
  }

  return {
    items,
    selectedItem,
    canGoPrevious,
    canGoNext,

    handlePreviousClick,
    handleNextClick,
    handleTabClick,
    handleKeyDown,

    goNext,
    goPrevious,
  };
}
