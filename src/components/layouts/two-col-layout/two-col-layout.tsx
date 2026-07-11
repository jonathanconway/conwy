import { TwoColLayoutProps } from "./two-col-layout-props";
import * as styles from "./two-col-layout.css";

export function TwoColLayout(props: TwoColLayoutProps) {
  const {
    children: [child0, child1],
  } = props;
  return (
    <div className={styles.container}>
      <div className={styles.column}>{child0}</div>
      <div className={styles.column}>{child1}</div>
    </div>
  );
}
