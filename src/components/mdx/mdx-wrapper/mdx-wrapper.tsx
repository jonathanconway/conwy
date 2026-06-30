"use client";

import { MdxWrapperExtended } from "./mdx-wrapper-extended/mdx-wrapper-extended";
import { MdxWrapperProps } from "./mdx-wrapper.props";
import "../mdx-hr/mdx-hr.css";

export function MdxWrapper(props: MdxWrapperProps) {
  return <MdxWrapperExtended>{props.children}</MdxWrapperExtended>;
}
