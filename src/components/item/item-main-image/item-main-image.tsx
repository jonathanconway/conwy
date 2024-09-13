import Image from "next/image";
import pluralize from "pluralize";

import { ItemMeta } from "@/framework/client";

import * as styles from "./item-main-image.styles";

type ImageProps = Omit<Parameters<typeof Image>[0], "src" | "alt">;

interface ItemMainImageProps<TMeta extends ItemMeta> extends ImageProps {
  readonly itemMeta: TMeta;
  readonly titleKey: keyof TMeta;
}

export function ItemMainImage<TMeta extends ItemMeta>(
  props: ItemMainImageProps<TMeta>,
) {
  return (
    <Image
      className={styles.image}
      priority
      unoptimized={true}
      width={96}
      height={64}
      {...props}
      src={`/images/${pluralize(props.itemMeta.type, 2)}/${props.itemMeta.slug}/${props.itemMeta.mainImage}`}
      alt={`Thumbnail image for ${props.itemMeta[props.titleKey]}`}
    />
  );
}
