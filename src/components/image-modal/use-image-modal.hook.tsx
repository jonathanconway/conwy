import { MouseEvent, useCallback, useEffect } from "react";

import { Image as Image_ } from "@/framework/client";

import { isBackdrop } from "../backdrop";
import { UseCarouselResult, useCarousel } from "../carousel";
import { CarouselItem } from "../carousel/carousel-item";

interface UseImageModalParams {
  readonly images: readonly Image_[];
  readonly defaultImage: Image_;

  readonly onClose: VoidFunction;
}

type ImageCarouselItem = CarouselItem & Image_;

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

  const defaultItem = items[params.images.indexOf(params.defaultImage)];

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
        case "Escape":
          event.preventDefault();
          params.onClose();
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

  const handleBackdropClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (!isBackdrop(target)) {
      return;
    }

    params.onClose();
  };

  const hasHotspots = Boolean(
    params.images
      .flatMap((workImage) => workImage.notes)
      .find((note) => Boolean(note.hotspot)),
  );

  return {
    carousel,
    hasHotspots,

    handleBackdropClick,
  };
}
