import { Note as Note_ } from "@/framework/client";

import { Fragment } from "../fragments";
import { Text } from "../text";

import { NoteSource } from "./note-source";
import * as styles from "./note.css";

interface NoteProps {
  readonly note: Note_;
}

export function Note({ note }: NoteProps) {
  const { meta: noteMeta, content } = note;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.headerLeftTitle}>
            <Text>Notes on...</Text>

            <NoteSource noteMeta={note.meta} />
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div>
          <div className={styles.blurb}>
            {noteMeta.blurb ?? noteMeta.shortBlurb}
          </div>
          <Fragment>{content}</Fragment>
        </div>

        <div className={styles.aside}></div>
      </div>
    </div>
  );
}
