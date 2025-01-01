import { cn } from "@jonathanconway/tailwindjs";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Aside, BlockQuotePullQuote } from "../../aside";
import { MdxH3 } from "../mdx-h3";

import { MdxAsideProps } from "./mdx-aside-props";
import * as styles from "./mdx-aside.styles";

export function MdxAside(props: MdxAsideProps) {
  return <Aside {...props} />;
}

export type MdxAsideHeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function MdxAsideHeading({
  className = "",
  ...restProps
}: MdxAsideHeadingProps) {
  return (
    <MdxH3 className={cn(className, styles.asideHeading())} {...restProps} />
  );
}
