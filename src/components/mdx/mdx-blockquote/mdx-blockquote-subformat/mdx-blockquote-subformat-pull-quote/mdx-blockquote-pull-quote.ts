import {
  getSubformatChildrenStartingWithPrefix,
  removeFirstChildPrefix,
} from "@/framework/client";

import { MdxBlockquoteProps } from "../../mdx-blockquote-props";

const PULL_QUOTE_PREFIX = "Pull-quote:";

export function getBlockQuotePullQuoteSubformatProps(
  props: MdxBlockquoteProps,
) {
  if (
    !getSubformatChildrenStartingWithPrefix(PULL_QUOTE_PREFIX, props.children)
  ) {
    return props;
  }

  const children = removeFirstChildPrefix(PULL_QUOTE_PREFIX, props.children);

  const isPullQuote = true;

  return {
    ...props,
    isPullQuote,
    children,
  };
}
