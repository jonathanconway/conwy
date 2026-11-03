import { useCallback, useEffect } from "react";

import { Image as Image_, KeyboardKeys } from "@/framework";

import { UseCarouselResult, useCarousel } from "../carousel";

import { ImageModalProps } from "./image-modal-props";
import { ImageCarouselItem } from "./use-image-modal.hook";

type UseImageModalCarouselParams = ImageModalProps & {
  readonly onTabSelect: (newSelectedItem: Image_) => void;
};

export function useImageModalCarousel({
  images,
  defaultImage,
  onTabSelect,
}: UseImageModalCarouselParams) {
  const items = images.map(
    (image) =>
      ({
        ...image,
        tooltip: {
          contents: image.title ?? image.alt,
        },
      }) as ImageCarouselItem,
  );

  const defaultItem = defaultImage
    ? items[images.indexOf(defaultImage)]
    : items[0];

  const handleTabSelect = (item: ImageCarouselItem) => {
    onTabSelect(images[items.indexOf(item)]);
  };

  const carousel = useCarousel<ImageCarouselItem>({
    items,
    defaultItem,
    onTabSelect: handleTabSelect,
  }) as UseCarouselResult<ImageCarouselItem>;

  const handleWindowKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case KeyboardKeys.ArrowLeft:
          event.preventDefault();
          carousel.goPrevious();
          break;
        case KeyboardKeys.ArrowRight:
          event.preventDefault();
          carousel.goNext();
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

  return {
    items,
    defaultItem,
    carousel,
  };
}
