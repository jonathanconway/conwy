import { isString } from "lodash";

import { LinkProps } from "../../../link";
import { MdxAProps } from "../mdx-a-props";

export function getADownloadSubformatProps(props: MdxAProps): LinkProps {
  if (!isString(props.children)) {
    return props;
  }

  const childrenText = props.children?.toString();

  if (!childrenText.startsWith("Download: ")) {
    return props;
  }

  const children = childrenText.split("Download: ")[1];
  const download = children;
  const target = "_blank";

  return {
    ...props,
    children,
    download,
    target,
  };
}
