"use client";

import Image from "next/image";
import { DetailedHTMLProps, ImgHTMLAttributes, MouseEventHandler } from "react";

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

function ImageFigureLink({
  src,
  alt,
  title,
  width,
  height,
  onImageLinkClick,
}: {
  readonly src: string;
  readonly alt?: string;
  readonly title?: string;
  readonly width?: string | number;
  readonly height?: string | number;

  readonly onImageLinkClick: MouseEventHandler;
}) {
  return (
    <Link
      className={styles.link}
      href={src}
      target="_blank"
      showOpenInNew={false}
      onClick={onImageLinkClick}
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
  );
}

export function ImageFigure(props: ImageFigureProps) {
  const { isModalOpen, handleImageLinkClick, onModalClose } = useImageFigure();
  const { width, height } = props;

  const src = props?.image?.src ?? props.src ?? "";
  const alt = props?.image?.alt ?? props.alt;
  const title = props?.title ?? alt;
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
