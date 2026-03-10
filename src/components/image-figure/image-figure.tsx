"use client";

import { isString } from "lodash";

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

  const alt = props.image?.alt ?? props.alt;
  const title = props.title ?? alt;
  const caption = title;

  const image = (
    <ImageFigureLink
      src={src}
      alt={alt}
      title={title}
      width={width}
      height={height}
      size={size}
      onImageLinkClick={handleImageLinkClick}
    />
  );

  return (
    <>
      {caption ? (
        <figure className={styles.container} suppressHydrationWarning>
          {image}

          {caption && (
            <figcaption className={styles.figCaption}>▲ {caption}</figcaption>
          )}
        </figure>
      ) : (
        image
      )}

      {isModalOpen && (
        <ImageModal
          images={[props?.image ?? { src, alt, notes: [] }]}
          onClose={onModalClose}
        />
      )}
    </>
  );
}
