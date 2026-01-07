import { isArray, isObject, isString } from "lodash";
import { ReactNode } from "react";

import {
  getChildrenText,
  getSubformatChildrenStartingWithPrefix,
  removeChildrenPrefix,
  removeChildrenPrefixPattern,
  removeFirstChildPrefix,
} from "@/framework/client";

import { MdxBlockquoteProps } from "../../mdx-blockquote-props";

const COPYABLE_PREFIX = "Copyable: ";

export const copyablePrefixPattern = new RegExp(/Copyable: /g);

function getTextContent(reactNode: ReactNode): string {
  if (isString(reactNode)) {
    return reactNode;
  }

  if (isArray(reactNode)) {
    const text = [];
    for (const child of reactNode) {
      text.push(getTextContent(child));
    }
    return text.join("").trim();
  }

  if (isObject(reactNode)) {
    if (
      "props" in reactNode &&
      reactNode.props &&
      isObject(reactNode.props) &&
      "children" in reactNode.props &&
      reactNode.props.children
    ) {
      return getTextContent(reactNode.props.children as ReactNode);
    }
  }

  return "";
}

export function getBlockQuoteSubformatCopyableProps(
  props: MdxBlockquoteProps,
): MdxBlockquoteProps {
  const childrenTextContent = getTextContent(props.children);
  if (!childrenTextContent.startsWith(COPYABLE_PREFIX)) {
    return props;
  }

  const copyText = childrenTextContent.replace(`${COPYABLE_PREFIX}:`, "");

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
