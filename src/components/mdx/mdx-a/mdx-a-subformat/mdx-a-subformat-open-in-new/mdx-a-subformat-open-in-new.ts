import { isString } from "lodash";

import { LinkProps } from "../../../../link";
import { MdxAProps } from "../../mdx-a-props";

const openInNewPrefixedPattern = new RegExp(/^[A-Z]([a-z].*):.*$/);

export function getAOpenInNewProps(props: MdxAProps): LinkProps {
  if (!isString(props.children)) {
    return props;
  }

  const childrenText = props.children?.toString();

  const hasNewPrefixedPattern = openInNewPrefixedPattern.test(childrenText);
  if (!hasNewPrefixedPattern) {
    return props;
  }

  const children = childrenText;
  const showOpenInNew = true;
  const target = "_blank";

  return {
    ...props,
    children,
    showOpenInNew,
    target,
  };
}
