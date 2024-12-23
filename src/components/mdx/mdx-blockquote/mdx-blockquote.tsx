"use client";

import { BlockQuote } from "../../block-quote";

import { MdxBlockQuoteProps } from "./mdx-blockquote-props";
import { getBlockQuoteSubformatProps } from "./mdx-blockquote-subformat";

export function MdxBlockQuote(props: MdxBlockQuoteProps) {
  props = getBlockQuoteSubformatProps(props);

  return <BlockQuote {...props} />;
}
