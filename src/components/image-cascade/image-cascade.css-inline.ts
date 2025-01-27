import { IMAGE_CASCADE_SIZE_PX } from "./image-cascade-size";
import { ImageCascadeProps } from "./image-cascade.types";

export const imageContainer = (
  props: ImageCascadeProps,
  imageIndex: number,
) => ({
  left: `${(100 / (props.images.length * 2)) * (imageIndex + 1)}%`,
  top: `${(100 / (props.images.length * 2)) * (imageIndex + 1)}%`,
  width: `${IMAGE_CASCADE_SIZE_PX.width}px`,
  height: `${IMAGE_CASCADE_SIZE_PX.height}px`,
});
