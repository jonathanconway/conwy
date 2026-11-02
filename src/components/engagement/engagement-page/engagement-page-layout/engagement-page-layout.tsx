import { ReactNode } from "react";

import { LayoutPropsBase } from "../../../layouts";

import * as styles from "./engagement-page-layout.css";

interface EngagementPageLayoutProps extends LayoutPropsBase {
  readonly summarySlot: ReactNode;
  readonly asideFirstLeftSlot: ReactNode;
  readonly asideFirstRightSlot: ReactNode;
  readonly asideImagesSlot: ReactNode;
}

export function EngagementPageLayout(props: EngagementPageLayoutProps) {
  const {
    summarySlot,
    asideFirstLeftSlot,
    asideFirstRightSlot,
    asideImagesSlot,
  } = props;
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.body}>{summarySlot}</div>

        <div className={styles.aside}>
          <div className={styles.asideFirst}>
            <div className={styles.asideFirstColumn}>{asideFirstLeftSlot}</div>
            <div className={styles.asideFirstColumn}>{asideFirstRightSlot}</div>
          </div>

          <div className={styles.asideImages}>{asideImagesSlot}</div>
        </div>
      </div>
    </div>
  );
}
