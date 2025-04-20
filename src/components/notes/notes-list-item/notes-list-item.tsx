import { NoteMeta } from "@/framework/client";

import { ContentListItem } from "../../content-list";
import { LinkBox } from "../../link-box";
import { Text } from "../../text";
import { TextTypes } from "../../text/text-type";
import { Tooltip } from "../../tooltip";

import { NotesListItemSource } from "./notes-list-item-source";
import * as styles from "./notes-list-item.css";

interface NotesListItemProps {
  readonly noteMeta: NoteMeta;
}

export function NotesListItem(props: NotesListItemProps) {
  const { noteMeta } = props;

  return (
    <LinkBox href={`notes/${noteMeta.slug}`}>
      <ContentListItem
        mainSlot={
          <>
            <NotesListItemSource noteMeta={noteMeta} />

            <Text type={TextTypes.Summary}>{noteMeta.shortBlurb}</Text>
          </>
        }
        asideSlot={
          noteMeta.commentCount && (
            <div className={styles.aside}>
              <Tooltip contents={`${noteMeta.commentCount} notes`}>
                <Text type={TextTypes.Small}>💬 {noteMeta.commentCount}</Text>
              </Tooltip>
            </div>
          )
        }
      />
    </LinkBox>
  );
}
