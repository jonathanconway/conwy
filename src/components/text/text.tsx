import { HTMLAttributes } from "react";

import { TextType } from "./text-type";
import { TEXT_TYPE_DETAILS } from "./text-type-details";

type TextProps = HTMLAttributes<{}> & {
  readonly type: TextType;
  readonly as?: string;
};

export function Text({ className, type, ...restProps }: TextProps) {
  const details = TEXT_TYPE_DETAILS[type];
  const Element = details.element as "span" | "p";

  return (
    <Element
      className={className ?? details.className}
      {...restProps}
    ></Element>
  );
}
