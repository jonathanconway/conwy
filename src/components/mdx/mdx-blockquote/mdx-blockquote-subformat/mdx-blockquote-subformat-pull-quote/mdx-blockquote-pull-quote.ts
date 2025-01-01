import {
  getHasSubformatChildrenMatchingPrefix,
  getSubformatChildrenPrefixedRest,
} from "@/framework/client";

import { MdxBlockquoteProps } from "../../mdx-blockquote-props";

const PULL_QUOTE_PREFIX = "Pull-quote:";

export function getBlockQuotePullQuoteSubformatProps(
  props: MdxBlockquoteProps,
) {
  if (
    !getHasSubformatChildrenMatchingPrefix(PULL_QUOTE_PREFIX, props.children)
  ) {
    return props;
  }

  const isPullQuote = true;

  const children = getSubformatChildrenPrefixedRest(
    PULL_QUOTE_PREFIX,
    props.children,
  );

  return {
    ...props,
    isPullQuote,
    children,
  };
}
