import { HTMLProps } from "react";

import * as styles from "./block-quote-pull-quote.css";

type BlockQuotePullQuoteProps = HTMLProps<HTMLQuoteElement>;

export function BlockQuotePullQuote({
  className,
  ...restProps
}: BlockQuotePullQuoteProps) {
  return (
    <blockquote className={className ?? styles.pullQuote} {...restProps} />
  );
}
