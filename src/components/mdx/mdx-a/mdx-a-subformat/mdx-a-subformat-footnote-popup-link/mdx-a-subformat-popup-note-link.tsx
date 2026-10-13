import { assert } from "@/framework";

import { MdxAProps } from "../../mdx-a-props";

const NOTE_A_ID_PREFIX = `user-content-fnref-`;

export function checkIsASubformatFootnotePopupLinkProps(props: MdxAProps) {
  return props.id?.startsWith(NOTE_A_ID_PREFIX);
}

export function getASubformatFootnotePopupContentElement(props: MdxAProps) {
  assert(props.href);

  const footnoteText = document
    .querySelector(`a[href="#${props.id}"]`)
    ?.parentElement?.childNodes?.[0]?.textContent?.trim();

  return footnoteText;
}
