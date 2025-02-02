import { Tooltip } from "../tooltip";

import { KBD_DETAILS } from "./kbd-details";
import { KbdProps } from "./kbd-props";
import * as styles from "./kbd.css";

export function Kbd({ className, children, ...restProps }: KbdProps) {
  const title =
    KBD_DETAILS[String(children).trim() as keyof typeof KBD_DETAILS]?.title;

  return (
    <Tooltip contents={title}>
      <kbd className={className ?? styles.kbd} {...restProps}>
        {children}
      </kbd>
    </Tooltip>
  );
}
