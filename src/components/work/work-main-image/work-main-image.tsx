import Image from "next/image";

import { WorkMeta } from "@/framework/client";

import * as styles from "./work-main-image.styles";

type ImageProps = Omit<Parameters<typeof Image>[0], "src" | "alt">;

interface WorkMainImageProps extends ImageProps {
  readonly workMeta: WorkMeta;
}

export function WorkMainImage(props: WorkMainImageProps) {
  const { workMeta, ...restProps } = props;
  return (
    <Image
      className={styles.image}
      priority
      unoptimized={true}
      width={96}
      height={64}
      {...restProps}
      src={`/images/works/${props.workMeta.slug}/${props.workMeta.mainImage ?? "thumbnail.png"}`}
      alt={`Work thumbnail image for ${props.workMeta.client}`}
    />
  );
}
