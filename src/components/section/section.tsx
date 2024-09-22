import { Heading } from "../heading";

import * as styles from "./section.styles";
import { SectionProps } from "./section.types";

export function Section(props: SectionProps) {
  const { label, children, ...restProps } = props;

  return (
    <div className={styles.container} {...restProps}>
      <Heading level={3} className={styles.label}>
        {props.label}
      </Heading>

      {props.children}
    </div>
  );
}
