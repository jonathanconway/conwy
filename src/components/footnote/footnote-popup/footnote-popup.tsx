"use client";

import { ReactNode } from "react";
import { Tooltip as Tooltip_ } from "react-tooltip";

import * as styles from "./footnote-popup.css";
import * as mixins from "./footnote-popup.mixins";
import { useFootnotePopup } from "./note-popup.hook";

interface FootnotePopupProps {
  readonly noteId: string;
  readonly children?: ReactNode;
}

export function FootnotePopup(props: FootnotePopupProps) {
  const { href, defaultIsOpen, setIsOpen } = useFootnotePopup(props);

  return (
    <Tooltip_
      setIsOpen={setIsOpen}
      anchorSelect={`a[href="${href}"]`}
      openEvents={{
        focus: false,
        mouseenter: false,
        click: true,
      }}
      closeEvents={{
        mouseout: false,
        blur: false,
        click: false,
        dblclick: false,
        mouseup: false,
        mouseleave: false,
      }}
      globalCloseEvents={{
        escape: true,
        clickOutsideAnchor: true,
      }}
      defaultIsOpen={defaultIsOpen}
      style={mixins.footnotePopup}
      classNameArrow={styles.tooltipArrow}
      opacity={1}
    >
      {props.children}
    </Tooltip_>
  );
}
