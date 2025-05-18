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

  const { children } = props;

  return {
    children,
    noteId,
  };
}
