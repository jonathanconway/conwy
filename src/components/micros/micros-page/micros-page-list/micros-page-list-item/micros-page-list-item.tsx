import { chatBubbleDynamicGradientIllustrationStatic } from "@/content";
import { ContentTypes, Micro } from "@/framework";

import {
  ContentListItem,
  ContentListItemBlurbContainer,
  ContentListItemType,
} from "../../../../content-list";
import { DateView } from "../../../../date";
import { Image } from "../../../../image";
import { Link } from "../../../../link";
import { LinkBox, LinkBoxTitle } from "../../../../link-box";
import { SocialLinksIcons } from "../../../../social-links";
import { Stack } from "../../../../stack";
import { Text, TextExpandable, TextTypes } from "../../../../text";

import * as styles from "./micros-page-list-item.css";

export interface MicrosPageListItemProps {
  readonly micro: Micro;
  readonly isExpandable?: boolean;
}

export function MicrosPageListItem({
  isExpandable = true,
  ...props
}: MicrosPageListItemProps) {
  return (
    <LinkBox href={`/micros/${props.micro.meta.slug}`}>
      <ContentListItem
        mainSlot={
          <>
            <Text type={TextTypes.Small} as="time">
              <DateView>{props.micro.meta.createdDate}</DateView>
            </Text>

            {isExpandable ? (
              <TextExpandable height="5rem">
                <Stack gap={0.25}>
                  {props.micro.meta.shortBlurb && (
                    <LinkBoxTitle>{props.micro.meta.shortBlurb}</LinkBoxTitle>
                  )}
                  <MicrosListItemContent {...props} />
                </Stack>
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

function MicrosListItemContent(props: MicrosPageListItemProps) {
  return (
    <>
      <ContentListItemBlurbContainer>
        {props.micro.content}
      </ContentListItemBlurbContainer>

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
