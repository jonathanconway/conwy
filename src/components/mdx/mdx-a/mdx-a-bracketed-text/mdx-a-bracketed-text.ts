import { isString } from "lodash";

import { isNotNil, removeDoubleSpaces } from "@/framework/client";

import { LinkProps } from "../../../link";
import { MdxAProps } from "../mdx-a-props";

const bracketedRegex = /\((.*?)\)/g;

export function getABracketedTextSubformatProps(props: MdxAProps): LinkProps {
  if (!isString(props.children)) {
    return props;
  }

  const childrenText = props.children?.toString();

  const bracketedValues = Array(childrenText.match(bracketedRegex) ?? [])
    .filter(isNotNil)
    .flat();

  if (bracketedValues.length === 0) {
    return props;
  }

  let children = childrenText;
  for (const bracketedValue of bracketedValues) {
    children = children.replaceAll(bracketedValue, "");
  }
  children = removeDoubleSpaces(children);

  const bracketedItems = bracketedValues.map((bracketedValue) =>
    bracketedValue.replace("(", "").replace(")", ""),
  );

  return {
    ...props,
    bracketedItems,
    children,
  };
}
