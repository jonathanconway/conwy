import { cn } from "@jonathanconway/tailwindjs";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import { MdxH3 } from "../mdx-h3";

import pullQuoteStyles from "./mdx-aside-pull-quote.module.css";
import * as styles from "./mdx-aside.styles";

export type MdxAsideProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export function MdxAside({ className = "", ...restProps }: MdxAsideProps) {
  const asideStyles = cn(
    styles.aside(),
    className,
    className === "pull-quote" ? pullQuoteStyles.pullQuote : "",
  );

  return <aside className={asideStyles} {...restProps} />;
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
