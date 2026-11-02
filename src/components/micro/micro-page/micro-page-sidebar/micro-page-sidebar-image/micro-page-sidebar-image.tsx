import { chatBubbleDynamicGradientIllustrationStatic } from "@/content";

import { Image } from "../../../../image";

import * as styles from "./micro-page-sidebar-image.css";

export function MicroPageSidebarImage() {
  return (
    <Image
      className={styles.image}
      image={chatBubbleDynamicGradientIllustrationStatic}
      alt="Micro main image"
      priority
      unoptimized={true}
      width={100}
      height={65}
    />
  );
}
