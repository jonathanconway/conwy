import { PageMainAsideLayoutProps } from "./page-main-aside-layout-props";
import * as styles from "./page-main-aside-layout.css";

export function PageMainAsideLayout(props: PageMainAsideLayoutProps) {
  const { mainSlot: main, asideSlot: aside } = props;

  return (
    <div className={styles.container}>
      <div className={styles.main}>{main}</div>

      <div className={styles.aside}>{aside}</div>
    </div>
  );
}
