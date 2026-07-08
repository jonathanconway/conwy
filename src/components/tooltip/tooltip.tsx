"use client";

import { isArray, isObject, isString, noop } from "lodash";
import { Children, ReactNode, cloneElement, useId, useMemo } from "react";
import { Tooltip as Tooltip_ } from "react-tooltip";

import { getResponsiveHidden, useGetBreakpoint } from "../responsive";
import { Breakpoints } from "../styling";

import { TooltipProps } from "./tooltip-props";
import * as styles from "./tooltip.css";
import * as mixins from "./tooltip.mixins";
import { checkIsElementOverflowing } from "./tooltip.utils";

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

  const breakpoint = useGetBreakpoint();
  const breakpointIsSm = breakpoint === Breakpoints.sm;

  const id = useId().replaceAll(":", "");
  const descriptionId = `${id}-description`;

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

  const handleDisableTooltip = useMemo(
    () =>
      props.hideIfChildrenNotOverflowing
        ? (anchor: HTMLElement | null) => !checkIsElementOverflowing(anchor)
        : undefined,
    [props.hideIfChildrenNotOverflowing],
  );

  return (
    <>
      {clonedChildren}

      <Tooltip_
        anchorSelect={`#${id}`}
        openEvents={{
          focus: true,
          mouseenter: true,
          click: breakpointIsSm,
        }}
        closeEvents={{
          mouseleave: true,
        }}
        openOnClick={breakpointIsSm}
        style={{
          ...mixins.tooltip,
          ...props.style,
        }}
        opacity={1}
        aria-describedby={descriptionId}
        disableTooltip={handleDisableTooltip}
        className={getResponsiveHidden(props.responsiveVisibility)}
      >
        {contents}
      </Tooltip_>

      <span hidden id={descriptionId}>
        {props.contents}
      </span>
    </>
  );
}
