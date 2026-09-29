import { chatBubbleDynamicGradientIllustrationStatic } from "@/content";
import { MicroMeta } from "@/framework/client";

import { Image } from "../../../../image";

import * as styles from "./micro-sidebar-image.css";

export interface MicroSidebarImageProps {
  readonly microMeta: MicroMeta;
}

export function MicroSidebarImage(props: MicroSidebarImageProps) {
  const { microMeta } = props;

  return (
    <Image
      className={styles.image}
      image={chatBubbleDynamicGradientIllustrationStatic}
      alt="Article main image"
      priority
      unoptimized={true}
      width={100}
      height={65}
    />
  );
}
