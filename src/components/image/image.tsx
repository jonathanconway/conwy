import NextImage from "next/image";

import { Image as Image_ } from "@/framework/client";

import { Link } from "../link";

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
    <Link href={image.src} target="_blank" showOpenInNew={false}>
      <NextImage
        {...restProps}
        src={image.src}
        alt={image.alt ?? image.src}
        width={width}
        height={height}
      />
    </Link>
  );
}
