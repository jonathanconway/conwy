import { ElementType } from "react";

import { TextProps } from "./text-props";
import { TextTypes } from "./text-type";
import { TEXT_TYPES_DETAILS } from "./text-type-details";
import * as styles from "./text.css";

export function Text<T extends HTMLElement = HTMLElement>(props: TextProps<T>) {
  const {
    className = styles[props.type as keyof typeof styles],
    type = TextTypes.Body,
    as,
    ...restProps
  } = props;
  const details = TEXT_TYPES_DETAILS[type];
  const Element = (as ?? details.element) as ElementType;

  return <Element className={className} {...restProps}></Element>;
}
