import {
  NOTE_A_ID_PREFIX,
  NOTE_CONTENT_ID_PREFIX,
  assert,
} from "@/framework/client";

import { MdxAProps } from "../../mdx-a-props";

export function checkIsASubformatPopupNoteLinkProps(props: MdxAProps) {
  return props.id?.startsWith(NOTE_A_ID_PREFIX);
}

export function getASubformatPopupNoteContentElement(props: MdxAProps) {
  assert(props.href);

  return document.querySelector(`a[href="#${props.id}"]`)?.parentElement;
  // const noteAId = props.id?.split(NOTE_A_ID_PREFIX)[1];
  // const noteContentId = `#${NOTE_CONTENT_ID_PREFIX}${noteAId}`;
  // return noteContentId;
}
