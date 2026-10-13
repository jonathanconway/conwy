import { ReactNode } from "react";

import { cn } from "@/framework/client";

import * as spacingStyles from "../../spacing/spacing.css";

import * as styles from "./mdx-container.css";

interface MdxContainerProps {
  readonly children: ReactNode;
}

export function MdxContainer(props: MdxContainerProps) {
  return (
    <div className={cn(styles.mdx, spacingStyles.spacingContainer)}>
      {props.children}
    </div>
  );
}
