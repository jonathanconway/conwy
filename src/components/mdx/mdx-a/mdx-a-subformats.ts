import { LinkProps } from "../../link";

import { getABracketedTextSubformatProps } from "./mdx-a-bracketed-text";
import { getADownloadSubformatProps } from "./mdx-a-download";
import { MdxAProps } from "./mdx-a-props";

export function getASubformatProps(props: MdxAProps): LinkProps {
  props = getABracketedTextSubformatProps(props);
  props = getADownloadSubformatProps(props);

  return props;
}
