import { HTMLProps } from "react";

export interface MdxDivProps extends HTMLProps<HTMLDivElement> {
  readonly "data-mdx-custom"?: string;
}
