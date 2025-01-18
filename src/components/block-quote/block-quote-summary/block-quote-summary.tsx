import { HTMLProps } from "react";

import * as styles from "./block-quote-summary.css";

type BlockQuoteSummaryProps = HTMLProps<HTMLQuoteElement>;

export function BlockQuoteSummary({
  className,
  children,
  ...restProps
}: BlockQuoteSummaryProps) {
  return (
    <blockquote className={className ?? styles.summaryContainer} {...restProps}>
      TL;DR: {children}
    </blockquote>
  );
}
