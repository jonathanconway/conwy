"use client";

import { useState } from "react";

import { useImageCascadeUrl } from "./use-image-cascade-url.hook";

interface UseImageCascadeParams<T> {
  readonly items: readonly T[];
  readonly defaultSelectedItem?: T;
  readonly isUrlAddressable?: boolean;
}

export interface UseImageCascadeResult<T> {
  readonly items: readonly T[];
  readonly selectedItem: T;
  readonly openedItem?: T;
  readonly canGoPrevious: boolean;
  readonly canGoNext: boolean;
  readonly handlePreviousClick: VoidFunction;
  readonly handleNextClick: VoidFunction;
  readonly handleTabClick: (newSelectedItem: T) => () => void;
}

interface UseImageCascadeState<T> {
  readonly selectedItem: T;
  readonly openedItem?: T;
}

function rotate<T>(input: readonly T[], index: number) {
  return [
    ...input.slice(index),
    ...[...input]
      .reverse()
      .slice(input.length - index)
      .reverse(),
  ];
}

export function useImageCascade<T>(params: UseImageCascadeParams<T>) {
  const sourceItems = [...params.items].reverse();

  const imageCascadeUrl = useImageCascadeUrl(params);

  const [state, setState] = useState<UseImageCascadeState<T>>({
    selectedItem: sourceItems[0],
    openedItem: imageCascadeUrl.defaultOpenedItem,
  });

  const { selectedItem, openedItem } = state;

  const selectedIndex = sourceItems.indexOf(selectedItem);

  const items = rotate(sourceItems, selectedIndex);

  const handlePreviousClick = () => {
    const selectedItemIndex = sourceItems.indexOf(state.selectedItem);

    const newIndex =
      selectedItemIndex === sourceItems.length - 1 ? 0 : selectedItemIndex + 1;

    const newSelectedItem = sourceItems[newIndex];

    setState({
      selectedItem: newSelectedItem,
    });
  };

  const handleNextClick = () => {
    const selectedItemIndex = sourceItems.indexOf(state.selectedItem);

    const newIndex =
      selectedItemIndex === 0 ? sourceItems.length - 1 : selectedItemIndex - 1;

    const newSelectedItem = sourceItems[newIndex];

    setState({
      selectedItem: newSelectedItem,
    });
  };

  const handleTabClick = (newSelectedItem: T) => () => {
    setState({
      selectedItem: newSelectedItem,
    });
  };

  const handleImageModalCloseClick = () => {
    setState((previousState) => ({
      ...previousState,
      openedItem: undefined,
    }));

    imageCascadeUrl.handleClose();
  };

  const handleImageClick = (openedItem: T) => () => {
    setState((previousState) => ({
      ...previousState,
      openedItem,
    }));
  };

  const isCascade = params.items.length > 1;

  return {
    items,
    selectedItem,
    openedItem,
    isCascade,
    handlePreviousClick,
    handleNextClick,
    handleTabClick,
    handleImageClick,
    handleImageModalCloseClick,
  };
}
