import { HTMLProps } from "react";

import { cn } from "@/framework/client";

import { withCopyable } from "../copyable";

import * as styles from "./block-quote.css";

type BlockQuoteProps_ = HTMLProps<HTMLQuoteElement>;

function BlockQuote_({ className, children, ...restProps }: BlockQuoteProps_) {
  return (
    <blockquote className={cn(styles.blockquote, className)} {...restProps}>
      {children}
    </blockquote>
  );
}

export const BlockQuote = withCopyable(BlockQuote_);

export type BlockQuoteProps = Parameters<typeof BlockQuote>[0];
