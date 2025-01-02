import { ArticleMeta } from "@/framework/client";

import {
  ContentListItem,
  ContentListItemBlurb,
  ContentListItemImage,
  ContentListItemType,
} from "../../../content-list";
import { Date } from "../../../date";
import { LinkBox, LinkBoxTitle } from "../../../link-box";
import { SocialLinksIcons } from "../../../social-links";

import * as styles from "./articles-list-item.css";

export type ArticlesListItemProps = ArticleMeta;

export function ArticlesListItem({
  date,
  slug,
  title,
  blurb,
  shortBlurb,
  socialLinks,
  type,
  mainImage,
}: ArticlesListItemProps) {
  return (
    <LinkBox href={`articles/${slug}`}>
      <ContentListItem
        mainSlot={
          <>
            <div className={styles.date}>
              <Date>{date}</Date>
            </div>

            <LinkBoxTitle>{title}</LinkBoxTitle>

            <ContentListItemBlurb>{shortBlurb ?? blurb}</ContentListItemBlurb>
          </>
        }
        asideSlot={
          <>
            <ContentListItemImage
              src={`/images/articles/${slug}/${mainImage ?? "main.jpg"}`}
              alt="Article main image"
            />

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
