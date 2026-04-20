"use client";

import { MdxDivCustom } from "./mdx-div-custom";
import { MdxDivProps } from "./mdx-div-props";

export function MdxDiv(props: MdxDivProps) {
  if (props["data-mdx-custom"]) {
    return <MdxDivCustom {...props} />;
  }

  return <div {...props} />;
}
