import { isString } from "lodash";

import { LinkProps } from "../../../../link";
import { MdxAProps } from "../../mdx-a-props";

const OPEN_IN_NEW_PREFIXES = ["Book", "Article", "Blog"];

export function getAOpenInNewProps(props: MdxAProps): LinkProps {
  if (!isString(props.children)) {
    return props;
  }

  const childrenText = props.children?.toString();

  const matchingPrefix = OPEN_IN_NEW_PREFIXES.find((prefix) =>
    childrenText.startsWith(`${prefix}:`),
  );
  if (!matchingPrefix) {
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
