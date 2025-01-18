import {
  getSubformatChildrenStartingWithPrefix,
  removeFirstChildPrefix,
} from "@/framework/client";

import { MdxBlockquoteProps } from "../../mdx-blockquote-props";

const SUMMARY_PREFIX = "Summary:";

export function getBlockQuoteSubformatSummaryProps(props: MdxBlockquoteProps) {
  if (!getSubformatChildrenStartingWithPrefix(SUMMARY_PREFIX, props.children)) {
    return props;
  }

  const children = removeFirstChildPrefix(SUMMARY_PREFIX, props.children);

  const isSummary = true;

  return {
    ...props,
    isSummary,
    children,
  };
}
