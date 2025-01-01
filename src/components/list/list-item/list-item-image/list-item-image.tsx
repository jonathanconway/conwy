import Image from "next/image";

import * as styles from "./list-item-image.css";

interface ListItemImageProps {
  readonly src: string;
  readonly alt: string;
}

export function ListItemImage(props: ListItemImageProps) {
  return (
    <Image
      className={styles.image}
      src={props.src}
      alt={props.alt}
      priority
      unoptimized={true}
      width={96}
      height={64}
    />
  );
}
