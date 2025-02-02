"use client";

import { getImageWidthHeightFromSize } from "../image";
import { ImageModal } from "../image-modal";

import { ImageFigureLink } from "./image-figure-link";
import { ImageFigureProps } from "./image-figure-props";
import * as styles from "./image-figure.css";
import { useImageFigure } from "./use-image-figure.hook";

export function ImageFigure(props: ImageFigureProps) {
  const { isModalOpen, handleImageLinkClick, onModalClose } = useImageFigure();
  const { size } = props;
  const { width, height } = getImageWidthHeightFromSize(props);

  const src = props.image?.src ?? props.src ?? "";
  const alt = props.image?.alt ?? props.alt;
  const title = props.title ?? alt;
  const caption = title ?? alt;

  return (
    <>
      <figure className={styles.container} suppressHydrationWarning>
        <ImageFigureLink
          src={src}
          alt={alt}
          title={title}
          width={width}
          height={height}
          size={size}
          onImageLinkClick={handleImageLinkClick}
        />

        {caption && (
          <figcaption className={styles.figCaption}>▲ {caption}</figcaption>
        )}
      </figure>

      {isModalOpen && (
        <ImageModal
          images={[props?.image ?? { src, alt, notes: [] }]}
          onClose={onModalClose}
        />
      )}
    </>
  );
}
