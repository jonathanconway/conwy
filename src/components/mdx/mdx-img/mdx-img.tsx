import Image from "next/image";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

import * as styles from "./mdx-img.styles";

export type MdxImgProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export function MdxImg(props: MdxImgProps) {
  const { title, alt, src, width, height } = props;

  return (
    <figure className={styles.container} suppressHydrationWarning>
      <a href={src} target="_blank">
        <Image
          className={styles.img}
          alt={alt ?? title ?? ""}
          src={src ?? ""}
          width={Number(width) || 600}
          height={Number(height) || 400}
          placeholder="empty"
        />
      </a>

      <figcaption className={styles.figCaption}>▲ {title ?? alt}</figcaption>
    </figure>
  );
}
