import { NOTE_A_ID_PREFIX, assert } from "@/framework/client";

import { MdxAProps } from "../../mdx-a-props";

export function checkIsASubformatPopupNoteLinkProps(props: MdxAProps) {
  return props.id?.startsWith(NOTE_A_ID_PREFIX);
}

export function getASubformatPopupNoteContentElement(props: MdxAProps) {
  assert(props.href);

  const noteText = document
    .querySelector(`a[href="#${props.id}"]`)
    ?.parentElement?.childNodes?.[0]?.textContent?.trim();

  return noteText;
}
