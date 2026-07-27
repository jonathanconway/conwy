import {
  getSubformatChildrenStartingWithPrefix,
  removeFirstChildPrefix,
} from "@/framework/client";

import { MdxBlockquoteProps } from "../../mdx-blockquote-props";

const DISCLAIMER_PREFIX = "Disclaimer:";

export function getBlockQuoteSubformatDisclaimerProps(
  props: MdxBlockquoteProps,
) {
  if (
    !getSubformatChildrenStartingWithPrefix(DISCLAIMER_PREFIX, props.children)
  ) {
    return props;
  }

  const children = removeFirstChildPrefix(DISCLAIMER_PREFIX, props.children);

  const isDisclaimer = true;

  return {
    ...props,
    isDisclaimer,
    children,
  };
}
