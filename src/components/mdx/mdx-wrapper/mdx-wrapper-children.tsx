import { ReactNode } from "react";

import { isReactElement } from "@/framework/client";

import { mdxComponentsExtended } from "../../../mdx-components-extended";

interface MdxWrapperChildrenProps {
  readonly children: readonly ReactNode[];
}

export function MdxWrapperChildren(props: MdxWrapperChildrenProps) {
  return Array.from(props.children).map((child) => {
    if (isReactElement(child)) {
      const ExtendedMdxComponent = mdxComponentsExtended[child.type as string];
      if (ExtendedMdxComponent) {
        return (
          <ExtendedMdxComponent key={child.key} {...(child.props as object)} />
        );
      }
    }
    return child;
  });
}
