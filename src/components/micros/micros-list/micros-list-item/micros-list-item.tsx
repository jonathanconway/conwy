import { chatBubbleDynamicGradientIllustrationStatic } from "@/content";
import { ContentTypes, Micro } from "@/framework";

import { ContentListItem, ContentListItemType } from "../../../content-list";
import { DateView } from "../../../date";
import { Image } from "../../../image";
import { Link } from "../../../link";
import { LinkBox, LinkBoxTitle } from "../../../link-box";
import { MdxContainer } from "../../../mdx";
import { SocialLinksIcons } from "../../../social-links";
import { Text } from "../../../text";
import { TextExpandable, TextTypes } from "../../../text";

import * as styles from "./micros-list-item.css";

export interface MicrosListItemProps {
  readonly micro: Micro;
  readonly isCollapsed?: boolean;
}

export function MicrosListItem({
  isCollapsed = true,
  ...props
}: MicrosListItemProps) {
  return (
    <LinkBox href={`/micros/${props.micro.meta.slug}`}>
      <ContentListItem
        mainSlot={
          <>
            <Text type={TextTypes.Small} as="time">
              <DateView>{props.micro.meta.createdDate}</DateView>
            </Text>

            {isCollapsed ? (
              <TextExpandable height="5rem">
                {props.micro.meta.shortBlurb && (
                  <LinkBoxTitle>{props.micro.meta.shortBlurb}</LinkBoxTitle>
                )}
                <MicrosListItemContent {...props} />
              </TextExpandable>
            ) : (
              <MicrosListItemContent {...props} />
            )}
          </>
        }
        asideSlot={
          <>
            <div className={styles.decorationContainer}>
              <Image
                className={styles.decorativeImage}
                image={chatBubbleDynamicGradientIllustrationStatic}
              />
            </div>

            {props.micro.meta.socialLinks && (
              <SocialLinksIcons socialLinks={props.micro.meta.socialLinks} />
            )}

            <ContentListItemType>{ContentTypes.Micro}</ContentListItemType>
          </>
        }
      />
    </LinkBox>
  );
}

function MicrosListItemContent(props: MicrosListItemProps) {
  return (
    <>
      <MdxContainer>
        <div className={styles.contentContainer}>{props.micro.content}</div>
      </MdxContainer>

      {props.micro.meta.mainLink && (
        <Link
          className={styles.mainLink}
          href={props.micro.meta.mainLink}
          target="_blank"
        >
          {props.micro.meta.mainLink}
        </Link>
      )}
    </>
  );
}
