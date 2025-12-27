import { ReactNode } from "react";

import * as styles from "./content-list-section.css";

interface ContentListSectionProps {
  readonly children: ReactNode;
}

export function ContentListSection(props: ContentListSectionProps) {
  return <div className={styles.section}>{props.children}</div>;
}
