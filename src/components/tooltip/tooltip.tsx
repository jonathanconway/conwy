"use client";

import { isArray, isObject, isString } from "lodash";
import { Children, ReactNode, cloneElement, useId } from "react";
import { Tooltip as Tooltip_ } from "react-tooltip";

import { getResponsiveHidden } from "../responsive";

import { TooltipProps } from "./tooltip-props";
import * as styles from "./tooltip.css";
import * as mixins from "./tooltip.mixins";

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
          ...mixins.tooltip,
          ...props.style,
        }}
        opacity={1}
        className={getResponsiveHidden(props.responsiveVisibility)}
      >
        {contents}
      </Tooltip_>
    </>
  );
}
