"use client";

import Image from "next/image";

import { Link } from "../../link";
import * as styles from "../image-figure.css";

import { ImageFigureLinkProps } from "./image-figure-link-props";

export function ImageFigureLink({
  src,
  alt,
  title,
  width,
  height,
  size,
  onImageLinkClick,
}: ImageFigureLinkProps) {
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
