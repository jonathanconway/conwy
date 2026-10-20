import { ElementType } from "react";

import { cn } from "@/framework";

import { TextProps } from "./text-props";
import { getTextSpacingClassName } from "./text-spacing";
import { TextTypes } from "./text-type";
import { TEXT_TYPES_DETAILS } from "./text-type-details";
import * as styles from "./text.css";

export function Text<T extends HTMLElement = HTMLElement>(props: TextProps<T>) {
  const {
    className,
    classNameExtended,
    spacingStrategy,
    type = TextTypes.Body,
    as,
    ...restProps
  } = props;

  const spacingClassName = getTextSpacingClassName(type, spacingStrategy);

  const innerClassNameKey = `${type}Inner` as keyof typeof styles;
  const innerClassName = styles[innerClassNameKey];

  const elementClassName =
    props.className ?? cn(innerClassName, spacingClassName, classNameExtended);

  const details = TEXT_TYPES_DETAILS[type];

  const Element = (as ?? details.element) as ElementType;

  return <Element className={elementClassName} {...restProps} />;
}
