import { Image as Image_ } from "@/framework/client";

import { vars } from "../theme";

import { IMAGE_CASCADE_SIZE_PX } from "./image-cascade-size";

interface CascadeContainerProps {
  readonly images: readonly Image_[];
}

export const cascadeContainer = ({ images }: CascadeContainerProps) => ({
  width: IMAGE_CASCADE_SIZE_PX.width * 2,
  height: IMAGE_CASCADE_SIZE_PX.height * 2 + images.length * 5,
});

interface ImageContainerProps {
  readonly images: readonly Image_[];
  readonly imageIndex: number;
  readonly isSelected: boolean;
}

export const imageContainer = ({
  images,
  imageIndex,
  isSelected,
}: ImageContainerProps) => ({
  left:
    IMAGE_CASCADE_SIZE_PX.width / 2 +
    (IMAGE_CASCADE_SIZE_PX.width / images.length) * (imageIndex + 1) -
    IMAGE_CASCADE_SIZE_PX.width / (images.length / 2),
  top:
    IMAGE_CASCADE_SIZE_PX.height / 2 +
    (IMAGE_CASCADE_SIZE_PX.height / images.length) * (imageIndex + 1) -
    IMAGE_CASCADE_SIZE_PX.height / (images.length / 2),

  width: `${IMAGE_CASCADE_SIZE_PX.width}px`,
  height: `${IMAGE_CASCADE_SIZE_PX.height}px`,

  borderColor: isSelected ? vars.link.hover.text.color : undefined,
});
