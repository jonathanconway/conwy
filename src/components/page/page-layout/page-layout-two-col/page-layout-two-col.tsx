import { PageLayoutTwoColProps } from "./page-layout-two-col-props";
import * as styles from "./page-layout-two-col.css";

export function PageLayoutTwoCol(props: PageLayoutTwoColProps) {
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
