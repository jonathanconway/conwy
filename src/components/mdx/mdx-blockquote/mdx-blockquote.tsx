"use client";

import { Aside } from "../../aside";
import {
  BlockQuote,
  BlockQuoteDisclaimer,
  BlockQuotePullQuote,
  BlockQuoteSummary,
} from "../../block-quote";

import { MdxBlockquoteProps } from "./mdx-blockquote-props";
import { getBlockQuoteSubformatProps } from "./mdx-blockquote-subformat";

export function MdxBlockquote(props: MdxBlockquoteProps) {
  const { isPullQuote, isSummary, isAside, isDisclaimer, ...processedProps } =
    getBlockQuoteSubformatProps(props);

  if (isPullQuote) {
    return <BlockQuotePullQuote {...processedProps} />;
  }

  if (isSummary) {
    return <BlockQuoteSummary {...processedProps} />;
  }

  if (isAside) {
    return <Aside {...processedProps} />;
  }

  if (isDisclaimer) {
    return <BlockQuoteDisclaimer {...processedProps} />;
  }

  return <BlockQuote {...processedProps} />;
}
