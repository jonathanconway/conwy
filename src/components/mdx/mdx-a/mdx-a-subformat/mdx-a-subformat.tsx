import { MdxAProps } from "../mdx-a-props";

import { getADownloadSubformatProps } from "./mdx-a-subformat-download";
import { getAOpenInNewProps } from "./mdx-a-subformat-open-in-new";

export function getASubformatProps(props: MdxAProps) {
  props = getADownloadSubformatProps(props);
  props = getAOpenInNewProps(props);

  return props;
}
