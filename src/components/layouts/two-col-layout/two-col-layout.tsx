import { TwoColLayoutProps } from "./two-col-layout-props";
import * as styles from "./two-col-layout.css";

export function TwoColLayout(props: TwoColLayoutProps) {
  const { justifyContent = "center" } = props;
  return (
    <div className={styles.container} style={{ justifyContent }}>
      <div className={styles.column}>{props.children[0]}</div>
      <div className={styles.column}>{props.children[1]}</div>
    </div>
  );
}
