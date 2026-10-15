import { ReactNode } from "react";

import { cn } from "@/framework";

import * as styles from "./mdx-container.css";

interface MdxContainerProps {
  readonly children: ReactNode;
}

export function MdxContainer(props: MdxContainerProps) {
  return <div className={cn(styles.mdx)}>{props.children}</div>;
}
