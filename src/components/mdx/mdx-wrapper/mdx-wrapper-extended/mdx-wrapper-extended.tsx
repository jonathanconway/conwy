import { isArray } from "lodash";
import { isValidElement } from "react";

import { mdxComponentsExtended } from "@/mdx-components-extended";

import { MdxWrapperElement } from "./mdx-wrapper-extended-element";
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
