import { Commentary, ContentLinkInfo } from "@/framework";

import { ContentListItem } from "../../content-list";
import { LinkBox } from "../../link-box";
import { Text, TextSpacingStrategies } from "../../text";
import { TextTypes } from "../../text/text-type";
import { Tooltip } from "../../tooltip";

import { CommentariesListItemSource } from "./commentaries-list-item-source";
import * as styles from "./commentaries-list-item.css";

interface CommentariesListItemProps {
  readonly commentary: Commentary;
  readonly sourceLinkInfo: ContentLinkInfo;
}

export function CommentariesListItem(props: CommentariesListItemProps) {
  const { commentary, sourceLinkInfo } = props;
  const { meta } = commentary;
  const { slug, shortBlurb, commentCount } = meta;

  return (
    <LinkBox href={`commentaries/${slug}`}>
      <ContentListItem
        mainSlot={
          <>
            <CommentariesListItemSource
              commentary={props.commentary}
              sourceLinkInfo={sourceLinkInfo}
            />

            <Text
              type={TextTypes.Blurb}
              spacingStrategy={TextSpacingStrategies.Exclude}
            >
              {shortBlurb}
            </Text>
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
