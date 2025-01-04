import { ElementType } from "react";

import { TextProps } from "./text-props";
import { TextTypes } from "./text-type";
import { TEXT_TYPE_DETAILS } from "./text-type-details";
import * as styles from "./text.css";

export function Text(props: TextProps) {
  const { className, type = TextTypes.Body, as, ...restProps } = props;
  const details = TEXT_TYPE_DETAILS[type];
  const Element = (as ?? details.element) as ElementType;

  return (
    <Element
      className={className ?? styles[details.classNameKey]}
      {...restProps}
    ></Element>
  );
}
