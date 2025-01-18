import {
  getSubformatChildrenStartingWithPrefix,
  removeFirstChildPrefix,
} from "@/framework/client";

import { MdxBlockquoteProps } from "../../mdx-blockquote-props";

const ASIDE_PREFIX = "Aside:";

export function getBlockQuoteSubformatAsideProps(props: MdxBlockquoteProps) {
  if (!getSubformatChildrenStartingWithPrefix(ASIDE_PREFIX, props.children)) {
    return props;
  }

  const children = removeFirstChildPrefix(ASIDE_PREFIX, props.children);

  const isAside = true;

  return {
    ...props,
    children,
    isAside,
  };
}
