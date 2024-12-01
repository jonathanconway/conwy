import { MdxPProps } from "../mdx-p-props";

import { getPSubformatPopupNoteProps } from "./mdx-p-subformat-popup-note";

export function getPSubformatProps(props: MdxPProps) {
  props = getPSubformatPopupNoteProps(props);

  return props;
}
