import { HTMLProps } from "react";

import * as styles from "./block-quote-summary.css";

type BlockQuoteSummaryProps = HTMLProps<HTMLQuoteElement>;

export function BlockQuoteSummary({
  className = styles.summaryContainer,
  children,
  ...restProps
}: BlockQuoteSummaryProps) {
  return (
    <blockquote className={className} {...restProps}>
      TL;DR: {children}
    </blockquote>
  );
}
