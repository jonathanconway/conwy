import { HTMLProps } from "react";

import { withCopyable } from "../copyable";

import * as styles from "./block-quote.css";

type BlockQuoteProps_ = HTMLProps<HTMLQuoteElement>;

function BlockQuote_({
  className = styles.blockquote,
  ...restProps
}: BlockQuoteProps_) {
  return <blockquote className={className} {...restProps} />;
}

export const BlockQuote = withCopyable(BlockQuote_);

export type BlockQuoteProps = Parameters<typeof BlockQuote>[0];
