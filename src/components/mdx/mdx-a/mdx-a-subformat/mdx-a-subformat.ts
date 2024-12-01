import { MdxAProps } from "../mdx-a-props";

import { getASubformatPopupNoteLinkProps } from "./mdx-a-subformat-popup-note-link";

export function getASubformatProps(props: MdxAProps) {
  props = getASubformatPopupNoteLinkProps(props);

  return props;
}
