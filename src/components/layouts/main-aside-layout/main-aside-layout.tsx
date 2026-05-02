import * as styles from "./main-aside-layout.css";
import { MainAsideLayoutProps } from "./main-aside-props";

export function MainAsideLayout(props: MainAsideLayoutProps) {
  const { main, aside } = props;
  return (
    <div className={styles.container}>
      <div className={styles.main}>{main}</div>

      <div className={styles.aside}>{aside}</div>
    </div>
  );
}
