import { MicroMeta } from "@/framework/client";

import { Date } from "../../../date";
import { Icon, IconTypes } from "../../../icon";
import { Link } from "../../../link";
import { LinkBox, LinkBoxTitle } from "../../../link-box";
import { ListItem, ListItemBlurb, ListItemType } from "../../../list";
import { SocialLinksIcons } from "../../../social-links";
import { TextExpandable } from "../../../text";

import * as styles from "./micros-list-item.css";

export interface MicrosListItemProps {
  readonly microMeta: MicroMeta;
}

export function MicrosListItem(props: MicrosListItemProps) {
  return (
    <LinkBox href={`/micros/${props.microMeta.slug}`}>
      <ListItem
        mainSlot={
          <>
            <LinkBoxTitle className={styles.date}>
              <Date>{props.microMeta.date}</Date>
            </LinkBoxTitle>

            <TextExpandable height="5rem">
              <ListItemBlurb>{props.microMeta.blurb}</ListItemBlurb>

              {props.microMeta.mainLink && (
                <Link
                  className={styles.mainLink}
                  href={props.microMeta.mainLink}
                  target="_blank"
                >
                  {props.microMeta.mainLink}
                </Link>
              )}
            </TextExpandable>
          </>
        }
        asideSlot={
          <>
            <div className={styles.decorationContainer}>
              <Icon
                className={styles.decoration}
                icon={IconTypes.Quote}
                size="100%"
              />
            </div>

            {props.microMeta.socialLinks && (
              <SocialLinksIcons socialLinks={props.microMeta.socialLinks} />
            )}

            <ListItemType>{props.microMeta.type}</ListItemType>
          </>
        }
      />
    </LinkBox>
  );
}
