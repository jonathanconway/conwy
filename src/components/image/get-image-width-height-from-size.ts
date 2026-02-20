import { ImageSize, ImageSizes } from "./image-sizes";

interface WidthHeight {
  readonly width?: string | number | undefined;
  readonly height?: string | number | undefined;
}

type GetImageWidthHeightFromSizeParams = { size?: ImageSize } & WidthHeight;

export function getImageWidthHeightFromSize({
  size,
  width,
  height,
}: GetImageWidthHeightFromSizeParams) {
  switch (size) {
    case ImageSizes.IconMedium:
      return {
        width: 100,
        height: 100,
      };
    case ImageSizes.IconXSmall:
      return {
        width: 16,
        height: 16,
      };
    case ImageSizes.IconSmall:
      return {
        width: 32,
        height: 32,
      };
    case ImageSizes.Small:
      return {
        width: 300,
        height: 200,
      };
    default:
      return { width, height };
  }
}
