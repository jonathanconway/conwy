import { Image } from "../../../image";

import * as styles from "./content-list-item-image.css";

interface ContentListItemImageProps {
  readonly src: string;
  readonly alt: string;
}

export function ContentListItemImage(props: ContentListItemImageProps) {
  return (
    <Image
      image={{
        src: props.src,
        alt: props.alt,
        notes: [],
      }}
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
