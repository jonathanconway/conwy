import { HTMLProps, ReactNode } from "react";

import { isNotNil } from "@/framework/client";

import { Text, TextTypes } from "../text";

import * as styles from "./chain.css";

interface ChainProps extends HTMLProps<HTMLDivElement> {
  readonly children: readonly ReactNode[];
}

export function Chain(props: ChainProps) {
  const { className = styles.chain, children, ...restProps } = props;

  const renderableChildren = children.filter(isNotNil);
  const maxChildIndex = renderableChildren.length - 1;

  return (
    <div className={className} {...restProps}>
      {renderableChildren.map((child, childIndex) => (
        <span key={childIndex} className={styles.part}>
          {child}
          {childIndex < maxChildIndex && <Text type={TextTypes.Small}>•</Text>}
        </span>
      ))}
    </div>
  );
}
