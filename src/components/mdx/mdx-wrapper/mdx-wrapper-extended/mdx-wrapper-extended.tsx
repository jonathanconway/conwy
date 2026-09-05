import { isArray } from "lodash";
import { isValidElement } from "react";

import { checkHasChildren, hasProps } from "@/framework/client";

import { mdxComponentsExtended } from "../../../../mdx-components-extended";
import { MdxWrapper } from "../mdx-wrapper";

import { MdxWrapperElementProps } from "./mdx-wrapper-extended-element-props";
import { MdxWrapperExtendedProps } from "./mdx-wrapper-extended-props";

export function MdxWrapperExtended(props: MdxWrapperExtendedProps) {
  if (!props?.children) {
    return null;
  }

  if (isArray(props.children)) {
    return (
      <>
        {Array.from(props.children).map((child, childIndex) => (
          <MdxWrapperElement
            key={childIndex}
            mdxComponentsExtended={mdxComponentsExtended}
          >
            {child}
          </MdxWrapperElement>
        ))}
      </>
    );
  }

  if (isValidElement(props.children)) {
    return (
      <MdxWrapperElement mdxComponentsExtended={mdxComponentsExtended}>
        {props.children}
      </MdxWrapperElement>
    );
  }

  return props.children;
}

function MdxWrapperElement({
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
