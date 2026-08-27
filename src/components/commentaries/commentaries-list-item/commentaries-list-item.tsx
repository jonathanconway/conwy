import { CommentaryMeta } from "@/framework/client";

import { ContentListItem } from "../../content-list";
import { LinkBox } from "../../link-box";
import { Text } from "../../text";
import { TextTypes } from "../../text/text-type";
import { Tooltip } from "../../tooltip";

import { CommentariesListItemSource } from "./commentaries-list-item-source";
import * as styles from "./commentaries-list-item.css";

interface CommentariesListItemProps {
  readonly commentaryMeta: CommentaryMeta;
}

export function CommentariesListItem(props: CommentariesListItemProps) {
  const { commentaryMeta } = props;

  return (
    <LinkBox href={`commentaries/${commentaryMeta.slug}`}>
      <ContentListItem
        mainSlot={
          <>
            <CommentariesListItemSource commentaryMeta={commentaryMeta} />

            <Text type={TextTypes.Summary}>{commentaryMeta.shortBlurb}</Text>
          </>
        }
        asideSlot={
          commentaryMeta.commentCount && (
            <div className={styles.aside}>
              <Tooltip contents={`${commentaryMeta.commentCount} notes`}>
                <Text type={TextTypes.Small}>
                  💬 {commentaryMeta.commentCount}
                </Text>
              </Tooltip>
            </div>
          )
        }
      />
    </LinkBox>
  );
}
