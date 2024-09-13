"use client";

import { isArray, isObject, isString } from "lodash";
import { CSSProperties, Children, ReactNode, cloneElement, useId } from "react";
import { Tooltip as Tooltip_ } from "react-tooltip";

import { TypeOfConst } from "@/framework";

import * as styles from "./tooltip.styles";

export interface TooltipProps {
  readonly key?: string;
  readonly children?: readonly ReactNode[] | ReactNode;
  readonly contents?: ReactNode | string;
  readonly style?: CSSProperties;
}

function convertContentsToReactNode(contents?: ReactNode | string) {
  if (!contents) {
    return undefined;
  }

  if (isString(contents)) {
    return <>{contents}</>;
  }

  return contents;
}

export function Tooltip(props: TooltipProps) {
  const contents = convertContentsToReactNode(props.contents);
  const children = convertContentsToReactNode(props.children);

  const id = useId().replaceAll(":", "");

  if (!contents) {
    return children;
  }

  const childObjects: readonly ReactNode[] = isArray(children)
    ? children
    : isObject(children)
      ? [children]
      : [];

  const clonedChildren =
    childObjects.length > 0 ? (
      Children.map(childObjects, (child: any) => cloneElement(child, { id }))
    ) : (
      <div id={id} tabIndex={0} className={styles.childrenContainer}>
        {children}
      </div>
    );

  return (
    <>
      {clonedChildren}

      <Tooltip_
        anchorSelect={`#${id}`}
        openEvents={{
          focus: true,
          mouseenter: true,
        }}
        style={{
          ...styles.tooltip,
          ...props.style,
        }}
        opacity={1}
      >
        {contents}
      </Tooltip_>
    </>
  );
}
