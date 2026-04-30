import { Note as Note_ } from "@/framework/client";

import { MdxContainer } from "../mdx";
import { Text } from "../text";

import { NoteSource } from "./note-source";
import * as styles from "./note.css";

interface NoteProps {
  readonly note: Note_;
}

export function Note(props: NoteProps) {
  const {
    note: { meta, content },
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.headerLeftTitle}>
            <Text type="body">Notes on...</Text>

            <NoteSource noteMeta={meta} />
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div>
          <div className={styles.blurb}>{meta.blurb ?? meta.shortBlurb}</div>

          <MdxContainer>{content}</MdxContainer>
        </div>

        <div className={styles.aside}></div>
      </div>
    </div>
  );
}
