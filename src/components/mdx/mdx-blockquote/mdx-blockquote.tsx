import { cn } from "@jonathanconway/tailwindjs";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import * as styles from "./mdx-blockquote.styles";

export type MdxBlockQuoteProps = DetailedHTMLProps<
  HTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;

export function MdxBlockQuote({
  className,
  children,
  ...restProps
}: MdxBlockQuoteProps) {
  return (
    <blockquote
      className={cn(styles.blockquote, className ?? "")}
      {...restProps}
    >
      {children}
    </blockquote>
  );
}
