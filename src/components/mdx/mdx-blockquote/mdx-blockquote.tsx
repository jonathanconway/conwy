"use client";

import { BlockQuote, BlockQuotePullQuote } from "../../block-quote";

import { MdxBlockquoteProps } from "./mdx-blockquote-props";
import { getBlockQuoteSubformatProps } from "./mdx-blockquote-subformat";

export function MdxBlockquote(props: MdxBlockquoteProps) {
  const processedProps = getBlockQuoteSubformatProps(props);

  if (processedProps.isPullQuote) {
    return <BlockQuotePullQuote {...processedProps} />;
  }

  return <BlockQuote {...processedProps} />;
}
