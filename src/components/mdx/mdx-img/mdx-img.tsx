import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

import { ImageFigure } from "../../image-figure";

import { getMdxImgSubformatProps } from "./mdx-img-subformat";

export type MdxImgProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export function MdxImg(props: MdxImgProps) {
  props = getMdxImgSubformatProps(props);

  return <ImageFigure {...props} />;
}
