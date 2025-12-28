import {
  Component,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

import "./mdx-pre.css";
import * as mixins from "./mdx-pre.mixins";

type HTMLPreElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
>;

export type MdxPreProps = HTMLPreElementProps;

export function MdxPre({
  className,
  children,
  style,
  ...restProps
}: MdxPreProps) {
  if (
    (children as ReactElement<HTMLPreElementProps>).props.className ===
    "language-mermaid--svg"
  ) {
    return <p>{children}</p>;
  }

  return (
    <pre
      style={{
        ...restProps,
        ...mixins.preInline,
      }} // Override prismjs css
      suppressHydrationWarning
      {...restProps}
    >
      {children}
    </pre>
  );
}
