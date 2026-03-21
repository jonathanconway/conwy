import { isFunction, isObject } from "lodash";
import { ReactNode } from "react";

import { Work as Work_ } from "@/framework/client";

import { MdxContainer } from "../../mdx";
import { Section } from "../../section";

export interface WorkBodyProps {
  readonly work: Work_;
}

export function unwrapMdxContent(children: ReactNode) {
  const subChildren = children as any;
  if (isFunction(subChildren.type)) {
    const subChildrenType = subChildren.type({});
    if (subChildrenType?.props?.children) {
      return subChildrenType?.props?.children;
    }
  }
  if (
    subChildren &&
    isObject(subChildren) &&
    "type" in subChildren &&
    isFunction(subChildren.type) &&
    subChildren.type.name === "MDXContent"
  ) {
    const unwrappedChildren = (subChildren.type({}) as any)?.children;
    return unwrappedChildren;
  }
  return children;
}

export function WorkBody(props: WorkBodyProps) {
  const children = unwrapMdxContent(props.work.blurbLong);
  return (
    <Section label="Duties + Achievements">
      <MdxContainer>{children}</MdxContainer>
    </Section>
  );
}
