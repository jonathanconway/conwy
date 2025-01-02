import { Label } from "../label";

import * as styles from "./section.css";
import { SectionProps } from "./section.types";

export function Section(props: SectionProps) {
  const { label, children, ...restProps } = props;

  return (
    <div className={styles.container} {...restProps}>
      <Label as="h4">{props.label}</Label>

      {props.children}
    </div>
  );
}
