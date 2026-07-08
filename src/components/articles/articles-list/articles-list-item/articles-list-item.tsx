import { ArticleMeta } from "@/framework/client";

import {
  ContentListItem,
  ContentListItemBlurb,
  ContentListItemImage,
  ContentListItemType,
} from "../../../content-list";
import { DateView } from "../../../date";
import { LinkBox, LinkBoxTitle } from "../../../link-box";
import { SocialLinksIcons } from "../../../social-links";
import { Text, TextTypes } from "../../../text";

import * as styles from "./articles-list-item.css";

export type ArticlesListItemProps = ArticleMeta;

export function ArticlesListItem(props: ArticlesListItemProps) {
  const {
    createdDate,
    updatedDate,
    slug,
    title,
    blurb,
    shortBlurb,
    socialLinks,
    type,
    mainImage,
  } = props;
  const date = updatedDate ?? createdDate;

  return (
    <LinkBox href={`articles/${slug}`}>
      <ContentListItem
        mainSlot={
          <>
            <Text type={TextTypes.PostDate}>
              <DateView>{date}</DateView>
            </Text>

            <LinkBoxTitle>{title}</LinkBoxTitle>

            <ContentListItemBlurb>{shortBlurb ?? blurb}</ContentListItemBlurb>
          </>
        }
        asideSlot={
          <>
            {mainImage?.src && (
              <ContentListItemImage
                src={mainImage.src}
                alt="Article main image"
              />
            )}

            {socialLinks.length > 0 && (
              <SocialLinksIcons socialLinks={socialLinks} />
            )}

            <ContentListItemType>{type}</ContentListItemType>
          </>
        }
      />
    </LinkBox>
  );
}
