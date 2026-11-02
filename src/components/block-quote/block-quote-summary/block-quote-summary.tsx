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
      <strong className={styles.prefix}>ℹ️ TL;DR:</strong> {children}
    </blockquote>
  );
}
