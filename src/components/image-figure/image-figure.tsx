"use client";

import { isString } from "lodash";

import {
  checkIsNotNil,
  escapeUnescapedString,
  replaceNewLinesWithSpace,
} from "@/framework";

import { getImageWidthHeightFromSize } from "../image";
import { ImageModal } from "../image-modal";

import { ImageFigureLink } from "./image-figure-link";
import { ImageFigureProps } from "./image-figure-props";
import * as styles from "./image-figure.css";
import { useImageFigure } from "./use-image-figure.hook";

export function ImageFigure(props: ImageFigureProps) {
  const { isModalOpen, handleImageLinkClick, onModalClose } = useImageFigure();
  const { size } = props;
  const { width = props.width, height = props.height } =
    getImageWidthHeightFromSize(props);

  const srcBlobOrString = props.image?.src ?? props.src ?? "";
  const src = isString(srcBlobOrString) ? srcBlobOrString : "";

  const alt = props.image?.alt ?? props.alt ?? "";
  const altWithoutNewlines = replaceNewLinesWithSpace(alt);

  const { title } = props;
  const titleOrAlt = title ?? alt ?? "";
  const titleOrAltEscaped = escapeUnescapedString(titleOrAlt).trim();

  const image = (
    <ImageFigureLink
      src={src}
      alt={altWithoutNewlines}
      title={titleOrAltEscaped}
      width={width}
      height={height}
      size={size}
      onImageLinkClick={handleImageLinkClick}
    />
  );

  return (
    <>
      {titleOrAltEscaped ? (
        <figure className={styles.container} suppressHydrationWarning>
          {image}

          <figcaption className={styles.figCaption}>
            <span>▲</span> {titleOrAltEscaped}
          </figcaption>
        </figure>
      ) : (
        image
      )}

      {isModalOpen && (
        <ImageModal
          images={[props?.image ?? { src, alt: altWithoutNewlines, notes: [] }]}
          onClose={onModalClose}
        />
      )}
    </>
  );
}
