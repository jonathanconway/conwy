import { HTMLProps } from "react";

import * as styles from "./block-quote-pull-quote.css";

type BlockQuotePullQuoteProps = HTMLProps<HTMLQuoteElement>;

export function BlockQuotePullQuote(props: BlockQuotePullQuoteProps) {
  const { className, ...restProps } = props;

  return (
    <blockquote className={className ?? styles.pullQuote} {...restProps} />
  );
}
