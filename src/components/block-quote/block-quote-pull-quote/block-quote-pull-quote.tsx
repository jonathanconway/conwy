import { HTMLProps } from "react";

import * as styles from "./block-quote-pull-quote.css";

type BlockQuotePullQuote = HTMLProps<HTMLQuoteElement>;

export function BlockQuotePullQuote({
  className,
  ...restProps
}: BlockQuotePullQuote) {
  return (
    <blockquote className={className ?? styles.pullQuote} {...restProps} />
  );
}
