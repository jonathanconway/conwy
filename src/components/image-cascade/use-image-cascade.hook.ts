"use client";

import {
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  useState,
} from "react";

import { Image, KeyboardKeys } from "@/framework";

import { UseCarouselResult, useCarousel } from "../carousel";

import { useImageCascadeUrl } from "./use-image-cascade-url.hook";

interface UseImageCascadeParams {
  readonly images: readonly Image[];
  readonly defaultSelectedImage?: Image;
  readonly isUrlAddressable?: boolean;
}

export interface UseImageCascadeResult {
  readonly images: readonly Image[];
  readonly selectedImage: Image;
  readonly openedImage?: Image;
  readonly isCascade: boolean;
  readonly carousel: UseCarouselResult<Image>;
  readonly handleImageClick: (image: Image) => MouseEventHandler;
  readonly handleImageModalCloseClick: VoidFunction;
  readonly handleSelectedImageClick: (image: Image) => MouseEventHandler;
  readonly handleSelectedImageKeyDown: (image: Image) => KeyboardEventHandler;
}

interface UseImageCascadeState {
  readonly openedImage?: Image;
}

export function useImageCascade(
  params: UseImageCascadeParams,
): UseImageCascadeResult {
  const { images } = params;
  const isCascade = images.length > 1;

  const carousel = useCarousel({
    items: images,
  });
  const { selectedItem: selectedImage } = carousel;

  const imageCascadeUrl = useImageCascadeUrl(params);

  const [state, setState] = useState<UseImageCascadeState>({
    openedImage: imageCascadeUrl.defaultOpenedItem,
  });
  const { openedImage } = state;

  const handleImageModalCloseClick = () => {
    setState((previousState) => ({
      ...previousState,
      openedImage: undefined,
    }));

    imageCascadeUrl.handleClose();
  };

  const handleImageClick = (newSelectedImage: Image) => () => {
    console.log("handleImageClick", newSelectedImage);
    carousel.handleTabClick(newSelectedImage);
  };

  const handleSelectedImageClick = (openedItem: Image) => () => {
    setState((previousState) => ({
      ...previousState,
      openedImage: openedItem,
    }));
  };

  const handleSelectedImageKeyDown =
    (openedItem: Image) => (event: KeyboardEvent) => {
      if (event.key === KeyboardKeys.Enter) {
        setState((previousState) => ({
          ...previousState,
          openedImage: openedItem,
        }));
      }
    };

  return {
    carousel,
    images,
    selectedImage,
    openedImage,
    isCascade,
    handleImageClick,
    handleImageModalCloseClick,
    handleSelectedImageClick,
    handleSelectedImageKeyDown,
  };
}
