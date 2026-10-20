import { HTMLProps } from "react";

import { Text, TextTypes } from "../../text";

import * as styles from "./block-quote-summary.css";

type BlockQuoteSummaryProps = HTMLProps<HTMLQuoteElement>;

export function BlockQuoteSummary({
  className = styles.summaryContainer,
  children,
  ...restProps
}: BlockQuoteSummaryProps) {
  return (
    <blockquote className={className} {...restProps}>
      <Text type={TextTypes.Body} as="strong">
        ℹ️ TL;DR:
      </Text>{" "}
      {children}
    </blockquote>
  );
}
