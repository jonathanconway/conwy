import { Image as Image_, checkIsOdd } from "@/framework";

import { vars } from "../theme";

import {
  IMAGE_CASCADE_IMAGE_SIZE_PX,
  IMAGE_CASCADE_SIZE_PX,
} from "./image-cascade-size";

interface ImageContainerProps {
  readonly images: readonly Image_[];
  readonly imageIndex: number;
  readonly isSelected: boolean;
}

const IMAGE_CASCADE_CENTER = {
  left: IMAGE_CASCADE_SIZE_PX.width / 2 - IMAGE_CASCADE_IMAGE_SIZE_PX.width / 2,
  top:
    IMAGE_CASCADE_SIZE_PX.height / 2 - IMAGE_CASCADE_IMAGE_SIZE_PX.height / 2,
};

const IMAGE_CASCADE_OFFSET_FACTOR = 25;

export const imageContainerPosition = ({
  images,
  imageIndex,
}: ImageContainerProps) => {
  const isOnlyOneImage = images.length === 1;
  if (isOnlyOneImage) {
    return IMAGE_CASCADE_CENTER;
  }

  const isImagesLengthOdd = checkIsOdd(images.length);
  const imageIndexCenter = images.length / 2;

  // Odd
  if (isImagesLengthOdd) {
    const isImageCenter = imageIndex + 1 === Math.ceil(imageIndexCenter);

    // Center
    if (isImageCenter) {
      return IMAGE_CASCADE_CENTER;
    }

    // Left/Top of Center
    else if (imageIndex + 1 < imageIndexCenter) {
      const imagePositionOffset =
        (Math.floor(imageIndexCenter) - imageIndex) *
        IMAGE_CASCADE_OFFSET_FACTOR;

      return {
        left: IMAGE_CASCADE_CENTER.left - imagePositionOffset,
        top: IMAGE_CASCADE_CENTER.top - imagePositionOffset,
      };
    }

    // Right/Bottom of Center
    else if (imageIndex + 1 > imageIndexCenter) {
      const imagePositionOffset =
        (imageIndex + 1 - Math.ceil(imageIndexCenter)) *
        IMAGE_CASCADE_OFFSET_FACTOR;

      return {
        left: IMAGE_CASCADE_CENTER.left + imagePositionOffset,
        top: IMAGE_CASCADE_CENTER.top + imagePositionOffset,
      };
    }
  }

  // Even
  else {
    // Left/Top of Center
    if (imageIndex + 1 <= imageIndexCenter) {
      const imagePositionOffset =
        (imageIndexCenter - imageIndex) * IMAGE_CASCADE_OFFSET_FACTOR -
        IMAGE_CASCADE_OFFSET_FACTOR / 2;

      return {
        left: IMAGE_CASCADE_CENTER.left - imagePositionOffset,
        top: IMAGE_CASCADE_CENTER.top - imagePositionOffset,
      };
    }

    // Right/Bottom of Center
    else if (imageIndex + 1 > imageIndexCenter) {
      const imagePositionOffset =
        (imageIndex + 1 - imageIndexCenter) * IMAGE_CASCADE_OFFSET_FACTOR -
        IMAGE_CASCADE_OFFSET_FACTOR / 2;

      return {
        left: IMAGE_CASCADE_CENTER.left + imagePositionOffset,
        top: IMAGE_CASCADE_CENTER.top + imagePositionOffset,
      };
    }
  }

  return IMAGE_CASCADE_CENTER;
};

const IMAGE_CASCADE_IMAGE_SIZE_CSS = {
  width: `${IMAGE_CASCADE_IMAGE_SIZE_PX.width}px`,
  height: `${IMAGE_CASCADE_IMAGE_SIZE_PX.height}px`,
};

export const imageContainerBorder = (props: ImageContainerProps) => {
  const { isSelected } = props;

  return {
    borderColor: isSelected ? vars.link.hover.text.color : undefined,
  };
};

export const imageContainerZIndex = (props: ImageContainerProps) => {
  const { isSelected } = props;

  return {
    zIndex: isSelected ? props.images.length + 1 : props.imageIndex,
  };
};

export const imageContainer = (props: ImageContainerProps) => {
  return {
    ...imageContainerPosition(props),
    ...IMAGE_CASCADE_IMAGE_SIZE_CSS,
    ...imageContainerBorder(props),
    ...imageContainerZIndex(props),
  };
};
