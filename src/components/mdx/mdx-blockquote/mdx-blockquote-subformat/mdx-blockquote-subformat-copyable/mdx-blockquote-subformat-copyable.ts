import {
  getChildrenText,
  getSubformatChildrenStartingWithPrefix,
  removeChildrenPrefix,
  removeFirstChildPrefix,
} from "@/framework/client";

import { MdxBlockQuoteProps } from "../../mdx-blockquote-props";

const COPYABLE_PREFIX = "Copyable: ";

export const copyablePrefixPattern = new RegExp(/Copyable: /g);

export function getBlockQuoteSubformatCopyableProps(
  props: MdxBlockQuoteProps,
): MdxBlockQuoteProps {
  if (
    !getSubformatChildrenStartingWithPrefix(COPYABLE_PREFIX, props.children)
  ) {
    return props;
  }

  const copyText = removeChildrenPrefix(COPYABLE_PREFIX)(
    getChildrenText(props.children),
  );

  const children = removeFirstChildPrefix(COPYABLE_PREFIX, props.children);

  const copyable = {
    copyText,
  };

  return {
    ...props,
    children,
    copyable,
  };
}
