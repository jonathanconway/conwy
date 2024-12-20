import { cn } from "@jonathanconway/tailwindjs";

import {
  getIsSubformatChildrenMatchesPrefix,
  getSubformatChildrenPrefixedRest,
} from "@/framework/client";

import { MdxBlockQuoteProps } from "../mdx-blockquote-props";

import * as styles from "./mdx-blockquote-aside.styles";

const ASIDE_PREFIX = "Aside:";

export function getBlockQuoteAsideSubformatProps(props: MdxBlockQuoteProps) {
  if (!getIsSubformatChildrenMatchesPrefix(ASIDE_PREFIX, props.children)) {
    return props;
  }

  const className = cn(props.className ?? "", styles.aside);

  const children = getSubformatChildrenPrefixedRest(
    ASIDE_PREFIX,
    props.children,
  );

  return {
    ...props,
    className,
    children,
  };
}
