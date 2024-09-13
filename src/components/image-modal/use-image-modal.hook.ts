import { MouseEvent, useEffect, useState } from "react";

import { ProjectImage } from "@/framework/client";

import { useCarousel } from "../carousel";

interface UseImageModalParams {
  readonly workImages: readonly ProjectImage[];
  readonly defaultSelectedWorkImage: ProjectImage;

  readonly onClose: VoidFunction;
}

export const ImageModalClasses = {
  Backdrop: "image-modal-backdrop",
};

export function useImageModal(params: UseImageModalParams) {
  const carousel = useCarousel({
    items: params.workImages,
    defaultSelectedItem: params.defaultSelectedWorkImage,
  });

  useEffect(() => {
    const handleWindowKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        params.onClose();
      }
    };

    window.addEventListener("keydown", handleWindowKeyDown);

    return () => {
      window.removeEventListener("keydown", handleWindowKeyDown);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackdropClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (!target.className.includes(ImageModalClasses.Backdrop)) {
      return;
    }

    params.onClose();
  };

  const hasHotspots = Boolean(
    params.workImages
      .flatMap((workImage) => workImage.notes)
      .find((note) => Boolean(note.hotspot)),
  );

  return {
    carousel,
    hasHotspots,

    handleBackdropClick,
  };
}
