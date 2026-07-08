import { ElementType } from "react";

import { cn } from "@/framework/client";

import { TextProps } from "./text-props";
import { TextTypes } from "./text-type";
import { TEXT_TYPES_DETAILS } from "./text-type-details";
import * as styles from "./text.css";

export function Text<T extends HTMLElement = HTMLElement>(props: TextProps<T>) {
  const {
    className: propsClassName,
    type = TextTypes.Body,
    as,
    style = {
      ...props.style,
      ...(props.textAlign ? { textAlign: props.textAlign } : undefined),
    },
    styleInner,
    ...restProps
  } = props;

  const typeStyleName = (
    props.styleInner ? `${props.type}Inner` : props.type
  ) as keyof typeof styles;

  const className = cn(
    typeStyleName,
    props.className ??
      styles[typeStyleName] ??
      styles[props.type as keyof typeof styles],
  );

  const details = TEXT_TYPES_DETAILS[type];

  const Element = (as ?? details.element) as ElementType;

  return <Element className={className} {...restProps} />;
}
