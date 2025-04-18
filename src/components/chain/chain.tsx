import { HTMLProps, ReactNode } from "react";

import { isNotNil } from "@/framework/client";

import { Text, TextTypes } from "../text";

import * as styles from "./chain.css";

interface ChainProps extends HTMLProps<HTMLDivElement> {
  readonly children: readonly ReactNode[];
}

export function Chain({ className, children, ...restProps }: ChainProps) {
  const renderableChildren = children.filter(isNotNil);
  const maxChildIndex = renderableChildren.length - 1;

  return (
    <div {...restProps} className={className ?? styles.chain}>
      {renderableChildren.map((child, childIndex) => (
        <>
          {child}
          {childIndex < maxChildIndex && <Text type={TextTypes.Small}>•</Text>}
        </>
      ))}
    </div>
  );
}
