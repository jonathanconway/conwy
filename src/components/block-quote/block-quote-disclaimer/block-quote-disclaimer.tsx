import { HTMLProps } from "react";

import { Text, TextTypes } from "../../text";

import * as styles from "./block-quote-disclaimer.css";

type BlockQuoteDisclaimerProps = HTMLProps<HTMLQuoteElement>;

export function BlockQuoteDisclaimer(props: BlockQuoteDisclaimerProps) {
  const {
    className = styles.disclaimerContainer,
    prefix = "Disclaimer:",
    children,
    ...restProps
  } = props;

  return (
    <blockquote className={className} {...restProps}>
      <strong className={styles.prefix}>⚠️ {prefix}</strong> {children}
    </blockquote>
  );
}
