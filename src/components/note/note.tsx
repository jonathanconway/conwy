import { Note as Note_ } from "@/framework/client";

import { Fragment } from "../fragments";
import { Heading } from "../heading";
import { Stack } from "../stack";
import { Text } from "../text";

import { NoteSource } from "./note-source";
import * as styles from "./note.css";

interface NoteProps {
  readonly note: Note_;
}

export function Note({ note }: NoteProps) {
  const { meta: noteMeta, content: Content } = note;

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
          <Fragment>
            <Content />
          </Fragment>
        </div>

        <div className={styles.aside}></div>
      </div>
    </div>
  );
}
