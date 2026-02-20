import { DetailedHTMLProps, HTMLAttributes } from "react";

import "./mdx-pre.css";
import * as mixins from "./mdx-pre.mixins";

export type MdxPreProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
>;

export function MdxPre({
  className,
  children,
  style,
  ...restProps
}: MdxPreProps) {
  if ((children as any).props.className === "language-mermaid--svg") {
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
