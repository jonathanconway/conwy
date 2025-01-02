import { MdxAProps } from "../mdx-a-props";

import { getADownloadSubformatProps } from "./mdx-a-subformat-download";
import { getASubformatPopupNoteLinkProps } from "./mdx-a-subformat-popup-note-link";

export function getASubformatProps(props: MdxAProps) {
  props = getASubformatPopupNoteLinkProps(props);
  props = getADownloadSubformatProps(props);

  return props;
}
