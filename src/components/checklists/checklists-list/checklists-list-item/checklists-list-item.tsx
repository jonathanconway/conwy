import { ArticleMeta, ChecklistMeta } from "@/framework/client";

import {
  ContentListItem,
  ContentListItemBlurb,
  ContentListItemImage,
  ContentListItemType,
} from "../../../content-list";
import { DateView } from "../../../date";
import { LinkBox, LinkBoxTitle } from "../../../link-box";
import { SocialLinksIcons } from "../../../social-links";

import * as styles from "./checklists-list-item.css";

export type ChecklistsListItemProps = ChecklistMeta;

export function ChecklistsListItem(props: ChecklistsListItemProps) {
  const {
    // createdDate,
    // updatedDate,
    slug,
    title,
    blurb,
    // shortBlurb,
    // socialLinks,
    // type,
    // mainImage,
  } = props;
  // const date = updatedDate ?? createdDate;

  return (
    <LinkBox href={`checklists/${slug}`}>
      <ContentListItem
        mainSlot={
          <>
            <div className={styles.date}>
              {/* <DateView>{date}</DateView> */}
            </div>

            <LinkBoxTitle>{title}</LinkBoxTitle>

            <ContentListItemBlurb>{blurb}</ContentListItemBlurb>
            {/* <ContentListItemType>Checklist</ContentListItemType> */}
          </>
        }
        // asideSlot={
        //   <>
        //     {/* {mainImage?.src && (
        //       <ContentListItemImage
        //         src={mainImage.src}
        //         alt="Article main image"
        //       />
        //     )}

        //     {socialLinks.length > 0 && (
        //       <SocialLinksIcons socialLinks={socialLinks} />
        //     )} */}

        //     <ContentListItemType>Checklist</ContentListItemType>
        //   </>
        // }
      />
    </LinkBox>
  );
}
