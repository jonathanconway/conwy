"use client";

import { useEffect, useState } from "react";

import { useChecklistContext } from "../../../checklist";
import { PopupNote } from "../../../popup-note";
import { MdxAProps } from "../mdx-a-props";
import {
  checkIsASubformatPopupNoteLinkProps,
  getASubformatPopupNoteContentElement,
} from "../mdx-a-subformat";

export function MdxAPopupNoteLink(props: MdxAProps) {
  const checklistContext = useChecklistContext();
  const [noteContent, setNoteContent] = useState("");

  useEffect(() => {
    if (checkIsASubformatPopupNoteLinkProps(props) && checklistContext) {
      const noteContent = getASubformatPopupNoteContentElement(props);
      setNoteContent(noteContent?.trim().replace("↩", "") ?? "");
    }
  }, []);

  return <PopupNote title={noteContent}>{props.children}</PopupNote>;
}
