import { Commentary, ContentLinkInfo } from "@/framework/client";

import { ContentListItem } from "../../content-list";
import { LinkBox } from "../../link-box";
import { Text } from "../../text";
import { TextTypes } from "../../text/text-type";
import { Tooltip } from "../../tooltip";

import { CommentariesListItemSource } from "./commentaries-list-item-source";
import * as styles from "./commentaries-list-item.css";

interface CommentariesListItemProps {
  readonly commentary: Commentary;
  readonly sourceLinkInfo: ContentLinkInfo;
}

export function CommentariesListItem(props: CommentariesListItemProps) {
  const {
    commentary: {
      meta: { slug, shortBlurb, commentCount },
    },
    sourceLinkInfo,
  } = props;

  return (
    <LinkBox href={`commentaries/${slug}`}>
      <ContentListItem
        mainSlot={
          <>
            <CommentariesListItemSource
              commentary={props.commentary}
              sourceLinkInfo={sourceLinkInfo}
            />

            <Text type={TextTypes.Summary}>{shortBlurb}</Text>
          </>
        }
        asideSlot={
          commentCount && (
            <div className={styles.aside}>
              <Tooltip contents={`${commentCount} notes`}>
                <Text type={TextTypes.Small}>💬 {commentCount}</Text>
              </Tooltip>
            </div>
          )
        }
      />
    </LinkBox>
  );
}
