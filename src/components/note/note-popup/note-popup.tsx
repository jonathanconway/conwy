"use client";

import { ReactNode } from "react";
import { Tooltip as Tooltip_ } from "react-tooltip";

import * as styles from "./note-popup.css";
import { useNotePopup } from "./note-popup.hook";
import * as mixins from "./note.mixins";

interface NotePopupProps {
  readonly noteId: string;
  readonly children?: ReactNode;
}

export function NotePopup(props: NotePopupProps) {
  const { href, defaultIsOpen, setIsOpen } = useNotePopup(props);

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
      style={mixins.note}
      classNameArrow={styles.tooltipArrow}
      opacity={1}
    >
      {props.children}
    </Tooltip_>
  );
}
