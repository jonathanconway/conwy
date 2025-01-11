import { useCallback, useEffect } from "react";

import { Image as Image_ } from "@/framework/client";

import { UseCarouselResult, useCarousel } from "../carousel";
import { CarouselItem } from "../carousel/carousel-item";

import { ImageModalProps } from "./image-modal-props";

type UseImageModalParams = ImageModalProps;

export type ImageCarouselItem = CarouselItem & Image_;

export function useImageModal(params: UseImageModalParams) {
  const items = params.images.map(
    (image) =>
      ({
        ...image,
        title: image.alt,
        tooltip: {
          contents: image.alt,
        },
      }) as ImageCarouselItem,
  );

  const defaultItem = params.defaultImage
    ? items[params.images.indexOf(params.defaultImage)]
    : items[0];

  const carousel = useCarousel<ImageCarouselItem>({
    items,
    defaultItem,
  }) as UseCarouselResult<ImageCarouselItem>;

  const handleWindowKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          carousel.handlePreviousClick();
          break;
        case "ArrowRight":
          event.preventDefault();
          carousel.handleNextClick();
          break;
        case "ArrowUp":
          event.preventDefault();
          carousel.handlePreviousClick();
          break;
        case "ArrowDown":
          event.preventDefault();
          carousel.handleNextClick();
          break;
      }
    },
    [carousel],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleWindowKeyDown);

    return () => {
      window.removeEventListener("keydown", handleWindowKeyDown);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carousel]);

  const hasHotspots = Boolean(
    params.images
      .flatMap((workImage) => workImage.notes ?? [])
      .find((note) => Boolean(note.hotspot)),
  );

  return {
    carousel,
    hasHotspots,
  };
}
