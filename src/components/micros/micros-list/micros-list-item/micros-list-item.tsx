import { MicroMeta } from "@/framework/client";

import {
  ContentListItem,
  ContentListItemBlurb,
  ContentListItemType,
} from "../../../content-list";
import { Date } from "../../../date";
import { Icon, IconTypes } from "../../../icon";
import { Link } from "../../../link";
import { LinkBox, LinkBoxTitle } from "../../../link-box";
import { SocialLinksIcons } from "../../../social-links";
import { TextExpandable } from "../../../text";

import * as styles from "./micros-list-item.css";

export interface MicrosListItemProps {
  readonly microMeta: MicroMeta;
  readonly isCollapsed?: boolean;
}

export function MicrosListItem({
  isCollapsed = true,
  ...props
}: MicrosListItemProps) {
  return (
    <LinkBox href={`/micros/${props.microMeta.slug}`}>
      <ContentListItem
        mainSlot={
          <>
            <LinkBoxTitle className={styles.date}>
              <Date>{props.microMeta.date}</Date>
            </LinkBoxTitle>

            {/* todo: tidy up */}
            {isCollapsed ? (
              <TextExpandable height="5rem">
                <ContentListItemBlurb>
                  {props.microMeta.blurb}
                </ContentListItemBlurb>

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
            ) : (
              <>
                <ContentListItemBlurb>
                  {props.microMeta.blurb}
                </ContentListItemBlurb>

                {props.microMeta.mainLink && (
                  <Link
                    className={styles.mainLink}
                    href={props.microMeta.mainLink}
                    target="_blank"
                  >
                    {props.microMeta.mainLink}
                  </Link>
                )}
              </>
            )}
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

            <ContentListItemType>{props.microMeta.type}</ContentListItemType>
          </>
        }
      />
    </LinkBox>
  );
}
