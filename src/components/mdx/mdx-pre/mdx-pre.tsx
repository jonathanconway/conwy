import { DetailedHTMLProps, HTMLAttributes } from "react";

import * as styles from "./mdx-pre.css";
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
  return (
    <pre
      className={styles.pre}
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
