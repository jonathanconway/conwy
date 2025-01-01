import { ElementType, HTMLAttributes } from "react";

import { TextType, TextTypes } from "./text-type";
import { TEXT_TYPE_DETAILS } from "./text-type-details";

type TextProps = HTMLAttributes<ElementType> & {
  readonly type?: TextType;
  readonly as?: string;
};

export function Text({
  className,
  type = TextTypes.Body,
  as,
  ...restProps
}: TextProps) {
  const details = TEXT_TYPE_DETAILS[type];
  const Element = (as ?? details.element) as ElementType;

  return (
    <Element
      className={className ?? details.className}
      {...restProps}
    ></Element>
  );
}
