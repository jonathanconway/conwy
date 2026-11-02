import { ReactNode } from "react";

import * as styles from "./page-layout.css";

export interface PageLayoutProps {
  readonly headerSlot: ReactNode;
  readonly mainSlot: ReactNode;
  readonly footerSlot: ReactNode;
}

// todo: move layouts into separate folders, e.g. /page/page-layout/....

export function PageLayout(props: PageLayoutProps) {
  const { headerSlot, mainSlot, footerSlot } = props;
  return (
    <div className={styles.container}>
      {headerSlot}

      <div className={styles.mainContainer}>{mainSlot}</div>

      {footerSlot}
    </div>
  );
}
