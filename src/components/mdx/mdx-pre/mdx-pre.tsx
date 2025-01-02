import { DetailedHTMLProps, HTMLAttributes } from "react";

import * as styles from "./mdx-pre.css";
import * as mixins from "./mdx-pre.mixins";

export type MdxPreProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
>;

export function MdxPre({ className, children, ...restProps }: MdxPreProps) {
  return (
    <pre
      className={styles.pre}
      style={mixins.preInline} // Override prismjs css
      {...restProps}
      suppressHydrationWarning
    >
      {children}
    </pre>
  );
}
