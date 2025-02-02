import { MouseEventHandler } from "react";

import { ImageSize } from "../../image";

export interface ImageFigureLinkProps {
  readonly src: string;
  readonly alt?: string;
  readonly title?: string;
  readonly width?: string | number;
  readonly height?: string | number;
  readonly size?: ImageSize;

  readonly onImageLinkClick: MouseEventHandler;
}
