import Image from "next/image";
import pluralize from "pluralize";

import { ItemMeta } from "@/framework/client";

import * as styles from "./item-main-image.css";

type ImageProps = Omit<Parameters<typeof Image>[0], "src" | "alt">;

interface ItemMainImageProps<TMeta extends ItemMeta> extends ImageProps {
  readonly itemMeta: TMeta;
  readonly titleKey: keyof TMeta;
}

export function ItemMainImage<TMeta extends ItemMeta>(
  props: ItemMainImageProps<TMeta>,
) {
  const { itemMeta, titleKey, ...restProps } = props;

  if (!itemMeta.mainImage?.src) {
    return;
  }

  return (
    <Image
      className={styles.image}
      priority
      unoptimized={true}
      width={96}
      height={64}
      src={itemMeta.mainImage?.src}
      alt={`Thumbnail image for ${itemMeta[titleKey]}`}
      {...restProps}
    />
  );
}
