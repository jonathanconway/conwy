"use client";

import { isArray } from "lodash";
import { ReactNode } from "react";

import { isReactElement } from "@/framework/client";

import { MdxWrapperChild } from "./mdx-wrapper-child";
import { MdxWrapperChildren } from "./mdx-wrapper-children";
import { MdxWrapperProps } from "./mdx-wrapper.props";

export function MdxWrapper(props: MdxWrapperProps) {
  if (!props.children) {
    return null;
  }

  if (isArray(props.children)) {
    return (
      <MdxWrapperChildren>
        {props.children as readonly ReactNode[]}
      </MdxWrapperChildren>
    );
  }

  if (isReactElement(props.children)) {
    return <MdxWrapperChild>{props.children}</MdxWrapperChild>;
  }

  return props.children;
}
