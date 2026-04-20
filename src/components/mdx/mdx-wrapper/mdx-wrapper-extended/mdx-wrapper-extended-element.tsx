"use client";

import { isValidElement } from "react";

import { checkHasChildren, hasProps } from "@/framework/client";

import { MdxWrapper } from "../mdx-wrapper";

import { MdxWrapperElementProps } from "./mdx-wrapper-extended-element-props";

export function MdxWrapperElement({
  mdxComponentsExtended,
  ...props
}: MdxWrapperElementProps) {
  const children = props.children;

  if (isValidElement(children)) {
    const childType = children.type as string;
    const MdxComponent = mdxComponentsExtended[childType];

    if (MdxComponent) {
      const childrenProps = hasProps(children) ? children.props : {};
      const childrenChildren = checkHasChildren(childrenProps) ? (
        <MdxWrapper>{childrenProps.children}</MdxWrapper>
      ) : null;

      return <MdxComponent {...childrenProps}>{childrenChildren}</MdxComponent>;
    }
  }

  return children;
}
