import Image from "next/image";

import { Engagement } from "@/framework";

import * as styles from "./item-main-image.css";

type ImageProps = Omit<Parameters<typeof Image>[0], "src" | "alt">;

interface ItemMainImageProps extends ImageProps {
  readonly engagement: Engagement;
  readonly title: string;
}

export function ItemMainImage(props: ItemMainImageProps) {
  const { engagement, title, ...restProps } = props;

  if (!("mainImage" in engagement.meta) || !engagement.meta.mainImage?.src) {
    return;
  }

  return (
    <Image
      className={styles.image}
      priority
      unoptimized={true}
      width={96}
      height={64}
      src={engagement.meta.mainImage?.src}
      alt={`Thumbnail image for ${title}`}
      {...restProps}
    />
  );
}
