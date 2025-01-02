import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

import { ImageFigure } from "../../image-figure";

export type MdxImgProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export function MdxImg(props: MdxImgProps) {
  return <ImageFigure {...props} />;
}
