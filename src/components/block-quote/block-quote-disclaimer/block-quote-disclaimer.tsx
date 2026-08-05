import { HTMLProps } from "react";

import * as styles from "./block-quote-disclaimer.css";

type BlockQuoteDisclaimerProps = HTMLProps<HTMLQuoteElement>;

export function BlockQuoteDisclaimer({
  className = styles.disclaimerContainer,
  children,
  ...restProps
}: BlockQuoteDisclaimerProps) {
  return (
    <blockquote className={className} {...restProps}>
      ⚠️ Disclaimer: {children}
    </blockquote>
  );
}
