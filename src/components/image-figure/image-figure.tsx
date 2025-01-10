"use client";

import Image from "next/image";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

import { Image as Image_ } from "@/framework";

import { ImageModal } from "../image-modal";
import { Link } from "../link";

import * as styles from "./image-figure.css";
import { useImageFigure } from "./use-image-figure.hook";

export type ImageFigureProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  readonly image?: Image_;
};

export function ImageFigure(props: ImageFigureProps) {
  const { isModalOpen, handleImageLinkClick, onModalClose } = useImageFigure();
  const { width, height } = props;

  const src = props?.image?.src ?? props.src ?? "";
  const alt = props?.image?.alt ?? props.alt;
  const title = props?.title ?? alt;

  return (
    <>
      <figure className={styles.container} suppressHydrationWarning>
        <Link
          href={src}
          target="_blank"
          showOpenInNew={false}
          onClick={handleImageLinkClick}
        >
          <Image
            className={styles.img}
            alt={alt ?? title ?? ""}
            src={src ?? ""}
            width={Number(width) || 600}
            height={Number(height) || 400}
            placeholder="empty"
          />
        </Link>

        <figcaption className={styles.figCaption}>▲ {title ?? alt}</figcaption>
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
