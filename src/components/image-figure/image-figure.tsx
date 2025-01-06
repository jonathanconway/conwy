import Image from "next/image";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

import { Link } from "../link";

import * as styles from "./image-figure.css";

export type ImageFigureProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export function ImageFigure(props: ImageFigureProps) {
  const { title, alt, src, width, height } = props;

  return (
    <figure className={styles.container} suppressHydrationWarning>
      <Link href={src} target="_blank" showOpenInNew={false}>
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
  );
}
