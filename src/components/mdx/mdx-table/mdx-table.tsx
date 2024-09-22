import { cn } from "@jonathanconway/tailwindjs";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import moduleStyles from "./mdx-table.module.css";
import * as styles from "./mdx-table.styles";

export type MdxTableProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export function MdxTable({ children, ...restProps }: MdxTableProps) {
  return (
    <table className={cn(moduleStyles.table, styles.table)} {...restProps}>
      {children}
    </table>
  );
}
