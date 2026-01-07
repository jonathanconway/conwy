import { NotePopup } from "../../note";

import { MdxPProps } from "./mdx-p-props";
import { getPSubformatProps } from "./mdx-p-subformat";
import "./mdx-p.css";

export function MdxP(props: MdxPProps) {
  props = getPSubformatProps(props);

  const { noteId, ...restProps } = props;

  if (noteId) {
    return <NotePopup noteId={noteId}>{props.children}</NotePopup>;
  }

  return <p {...restProps} />;
}
