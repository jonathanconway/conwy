import { Image as Image_ } from "@/framework/client";

import { CarouselItem } from "../carousel/carousel-item";

import { ImageModalProps } from "./image-modal-props";
import { useImageModalCarousel } from "./use-image-modal-carousel.hook";
import { useImageModalUrl } from "./use-image-modal-url.hook";

type UseImageModalParams = ImageModalProps;

export type ImageCarouselItem = CarouselItem & Image_;

export function useImageModal(params: UseImageModalParams) {
  const { images, defaultImage, onClose } = params;

  const { handleTabSelect } = useImageModalUrl(params);

  const { carousel } = useImageModalCarousel({
    images,
    defaultImage,
    onClose,
    onTabSelect: handleTabSelect,
  });

  const hasHotspots = Boolean(
    images
      .flatMap((workImage) => workImage.notes ?? [])
      .find((note) => Boolean(note.hotspot)),
  );

  return {
    carousel,
    hasHotspots,
  };
}
