import NextImage from "next/image";

import { Image as Image_ } from "@/framework/client";

type NextImageProps = Partial<Parameters<typeof NextImage>[0]>;

interface ImageProps extends NextImageProps {
  readonly image: Image_;
}

export function Image({
  image,
  width = 600,
  height = 400,
  ...restProps
}: ImageProps) {
  return (
    <NextImage
      {...restProps}
      src={image.src}
      alt={image.alt ?? image.src}
      width={width}
      height={height}
    />
  );
}
