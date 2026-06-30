import { Icon, IconTypes } from "../icon";
import { Tooltip } from "../tooltip";

import { PopupNoteProps } from "./popup-note-props";
import * as styles from "./popup-note.css";

export function PopupNote(props: PopupNoteProps) {
  return (
    <Tooltip
      contents={
        <span className={styles.popupNoteContentsContainer}>{props.title}</span>
      }
      style={{
        maxWidth: "15rem",
        padding: "0.5rem",
      }}
    >
      <span className={styles.popupNoteContainer} tabIndex={0}>
        <Icon
          icon={IconTypes.Info}
          className={styles.popupNoteLink}
          size="1rem"
        />
      </span>
    </Tooltip>
  );
}
