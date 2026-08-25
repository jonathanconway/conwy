import {
  getSubformatChildrenStartingWithPrefix,
  removeFirstChildPrefix,
} from "@/framework/client";

import { MdxBlockquoteProps } from "../../mdx-blockquote-props";

const DISCLAIMER_PREFIX = "Disclaimer:";
const CAVEAT_PREFIX = "Caveat:";
const PREFIXES = [DISCLAIMER_PREFIX, CAVEAT_PREFIX];

function getPrefix(props: MdxBlockquoteProps) {
  for (const prefix of PREFIXES) {
    if (getSubformatChildrenStartingWithPrefix(prefix, props.children)) {
      return prefix;
    }
  }
}

export function getBlockQuoteSubformatDisclaimerProps(
  props: MdxBlockquoteProps,
) {
  const prefix = getPrefix(props);
  if (!prefix) {
    return props;
  }

  const children = removeFirstChildPrefix(prefix, props.children);

  const isDisclaimer = true;

  return {
    ...props,
    isDisclaimer,
    prefix,
    children,
  };
}
