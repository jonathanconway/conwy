import { DetailedHTMLProps, HTMLAttributes } from "react";

import * as styles from "./mdx-pre.styles";

export type MdxPreProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
>;

export function MdxPre({ className, children, ...restProps }: MdxPreProps) {
  return (
    <pre
      style={styles.preInline} // Override prismjs css
      {...restProps}
      suppressHydrationWarning
    >
      {children}
    </pre>
  );
}
