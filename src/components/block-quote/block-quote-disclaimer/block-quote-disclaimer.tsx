import { HTMLProps } from "react";

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
      ⚠️ {prefix} {children}
    </blockquote>
  );
}
