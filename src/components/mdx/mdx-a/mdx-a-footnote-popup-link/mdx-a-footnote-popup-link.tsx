"use client";

import { useEffect, useState } from "react";

import { PopupNote } from "../../../popup-note";
import { MdxAProps } from "../mdx-a-props";
import {
  checkIsASubformatFootnotePopupLinkProps,
  getASubformatFootnotePopupContentElement,
} from "../mdx-a-subformat";

export function MdxAFootnotePopupLink(props: MdxAProps) {
  const [footnoteContent, setFootnoteContent] = useState("");

  useEffect(() => {
    if (checkIsASubformatFootnotePopupLinkProps(props)) {
      const noteContent = getASubformatFootnotePopupContentElement(props);
      setFootnoteContent(noteContent?.trim().replace("↩", "") ?? "");
    }
  }, []);

  return <PopupNote title={footnoteContent}>{props.children}</PopupNote>;
}
