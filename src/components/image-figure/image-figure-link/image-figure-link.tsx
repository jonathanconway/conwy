"use client";

import Image from "next/image";
import { ForwardedRef, forwardRef } from "react";

import { Link } from "../../link";
import * as styles from "../image-figure.css";

import { ImageFigureLinkProps } from "./image-figure-link-props";

export function ImageFigureLink_(
  props: ImageFigureLinkProps,
  ref: ForwardedRef<null>,
) {
  const { src, alt, title, width, height, size, onImageLinkClick } = props;

  const style = {
    width,
    height,
  };

  const image = (
    <Image
      className={size ? styles.img : styles.imgSized}
      alt={alt ?? title ?? ""}
      src={src ?? ""}
      width={Number(width) || 600}
      height={Number(height) || 400}
      style={style}
      placeholder="empty"
    />
  );

  if (alt || title) {
    return (
      <Link
        ref={ref}
        className={styles.link}
        href={src}
        target="_blank"
        showOpenInNew={false}
        onClick={onImageLinkClick}
      >
        {image}
      </Link>
    );
  }

  return image;
}

export const ImageFigureLink = forwardRef(ImageFigureLink_);
