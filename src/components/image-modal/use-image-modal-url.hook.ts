import { useEffect } from "react";

import { Image as Image_, setSearchParams } from "@/framework/client";

import { ImageModalProps } from "./image-modal-props";

type UseImageModalUrlParams = ImageModalProps;

export function useImageModalUrl({
  images,
  defaultImage,
  isUrlAddressable,
}: UseImageModalUrlParams) {
  useEffect(() => {
    if (!isUrlAddressable) {
      return;
    }

    const defaultImageIndex = defaultImage ? images.indexOf(defaultImage) : 0;
    setSearchParams({ image: defaultImageIndex.toString() });
  }, []);

  const handleTabSelect = (newSelectedItem: Image_) => {
    if (!isUrlAddressable) {
      return;
    }

    setSearchParams({ image: images.indexOf(newSelectedItem).toString() });
  };

  return {
    handleTabSelect,
  };
}
