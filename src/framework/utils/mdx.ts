import { camelCase, isFunction, isObject, kebabCase } from "lodash";
import { ReactNode } from "react";

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

export function getMdxComponentProps<TProps extends object>(
  props: object,
  prefixComponentName: string,
): TProps {
  const prefixComponentNameKebab = `data-${kebabCase(prefixComponentName)}`;
  const mdxProps: Record<string, string> = {};
  for (const [key, value] of Object.entries(props)) {
    if (key.startsWith(`${prefixComponentNameKebab}-`)) {
      const propKey = camelCase(
        key.replace(`${prefixComponentNameKebab}-`, ""),
      );
      try {
        mdxProps[propKey] = JSON.parse(value);
      } catch (error) {
        mdxProps[propKey] = value;
      }
    }
  }
  return mdxProps as TProps;
}
