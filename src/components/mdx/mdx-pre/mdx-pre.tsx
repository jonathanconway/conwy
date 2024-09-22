import { DetailedHTMLProps, HTMLAttributes } from "react";

import moduleStyles from "./mdx-pre.module.css";
import * as styles from "./mdx-pre.styles";

export type MdxPreProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
>;

export function MdxPre({ className, children, ...restProps }: MdxPreProps) {
  return (
    <pre
      className={moduleStyles.pre}
      style={styles.preInline} // Override prismjs css
      {...restProps}
      suppressHydrationWarning
    >
      {children}
    </pre>
  );
}
