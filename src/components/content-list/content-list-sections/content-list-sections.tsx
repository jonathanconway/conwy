import { ReactNode } from "react";

import * as styles from "./content-list-sections.css";

interface ContentListSectionsProps {
  readonly children: ReactNode;
}

export function ContentListSections(props: ContentListSectionsProps) {
  return <div className={styles.sections}>{props.children}</div>;
}
