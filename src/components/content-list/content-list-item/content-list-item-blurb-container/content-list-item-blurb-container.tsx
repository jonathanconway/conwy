import { ReactNode } from "react";

import * as styles from "./content-list-item-blurb-container.css";

export interface ContentListItemBlurbContainerProps {
  readonly children: ReactNode;
}

export function ContentListItemBlurbContainer(
  props: ContentListItemBlurbContainerProps,
) {
  return (
    <div className={styles.contentListItemBlurbContainer}>{props.children}</div>
  );
}
