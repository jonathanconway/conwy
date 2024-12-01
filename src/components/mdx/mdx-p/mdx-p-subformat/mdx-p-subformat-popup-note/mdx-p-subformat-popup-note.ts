import {
  NOTE_ID_PREFIX,
  getChildTextPatternMatches,
  notePattern,
} from "@/framework/client";

import { MdxPProps } from "../../mdx-p-props";

export function getPSubformatPopupNoteProps(props: MdxPProps): MdxPProps {
  const matches = getChildTextPatternMatches(notePattern, props.children);
  if (!matches) {
    return props;
  }

  const noteId = `${NOTE_ID_PREFIX}${matches[0][1]}`;

  const children = String(props.children).replace(notePattern, "").trim();

  return {
    children,
    noteId,
  };
}
