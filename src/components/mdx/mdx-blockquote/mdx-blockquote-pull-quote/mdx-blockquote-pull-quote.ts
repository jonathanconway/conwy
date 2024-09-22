import { cn } from "@jonathanconway/tailwindjs";

import {
  getIsSubformatChildrenPrefixed,
  getSubformatChildrenPrefixedRest,
} from "@/framework/client";

import { MdxBlockQuoteProps } from "../mdx-blockquote-props";

import moduleStyles from "./mdx-blockquote-pull-quote.module.css";

const PULL_QUOTE_PREFIX = "Pull-quote:";

export function getBlockQuotePullQuoteSubformatProps(
  props: MdxBlockQuoteProps,
) {
  if (!getIsSubformatChildrenPrefixed(PULL_QUOTE_PREFIX, props.children)) {
    return props;
  }

  const className = cn(props.className ?? "", moduleStyles.pullQuote);

  const children = getSubformatChildrenPrefixedRest(
    PULL_QUOTE_PREFIX,
    props.children,
  );

  return {
    ...props,
    className,
    children,
  };
}
