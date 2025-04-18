import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

import { Image as Image_ } from "@/framework/client";

import { ImageSize } from "../image/image-sizes";

export type ImageFigureProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  readonly image?: Image_;
  readonly size?: ImageSize;
};
