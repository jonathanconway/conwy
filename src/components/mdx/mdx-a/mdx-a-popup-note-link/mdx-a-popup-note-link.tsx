"use client";

import { useEffect, useState } from "react";

import { PopupNote } from "../../../popup-note";
import { MdxAProps } from "../mdx-a-props";
import {
  checkIsASubformatPopupNoteLinkProps,
  getASubformatPopupNoteContentElement,
} from "../mdx-a-subformat";

export function MdxAPopupNoteLink(props: MdxAProps) {
  const [noteContent, setNoteContent] = useState("ssss");

  useEffect(() => {
    if (checkIsASubformatPopupNoteLinkProps(props)) {
      const noteContentElement = getASubformatPopupNoteContentElement(props);
      const noteContent = noteContentElement?.textContent;
      setNoteContent(noteContent?.trim().replace("↩", "") ?? "");
    }
  }, []);

  return <PopupNote title={noteContent}>{props.children}</PopupNote>;
}
