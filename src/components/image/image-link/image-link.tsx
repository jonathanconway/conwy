import NextImage from "next/image";

import { Image as Image_ } from "@/framework/client";

import { Link } from "../../link";

type NextImageLinkProps = Partial<Parameters<typeof NextImage>[0]>;

interface ImageLinkProps extends NextImageLinkProps {
  readonly image: Image_;
}

export function ImageLink({
  image,
  width = 600,
  height = 400,
  ...restProps
}: ImageLinkProps) {
  return (
    <Link
      className="image-link"
      href={image.src ?? restProps.src}
      target="_blank"
      showOpenInNew={false}
    >
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
