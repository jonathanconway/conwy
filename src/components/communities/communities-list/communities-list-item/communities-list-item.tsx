import { Community as Community_ } from "@/framework/client";

import { ContentListItem } from "../../../content-list";
import { Image } from "../../../image";
import { Link } from "../../../link";
import { LinkBox, LinkBoxTitle } from "../../../link-box";
import { MdxWrapper } from "../../../mdx";

import * as styles from "./communities-list-item.css";

interface CommunitiesListItemProps {
  readonly community: Community_;
}

export function CommunitiesListItem(props: CommunitiesListItemProps) {
  return (
    <LinkBox href={props.community.meta.url} target="_blank">
      <ContentListItem
        mainSlot={
          <>
            <div className={styles.imageContainer}>
              <Image
                image={props.community.meta.mainImage}
                width={16}
                height={16}
              />
            </div>

            <LinkBoxTitle>
              <Link
                link={{
                  url: props.community.meta.url,
                  title: props.community.meta.title,
                }}
              />
            </LinkBoxTitle>

            <MdxWrapper>{props.community.blurbShort}</MdxWrapper>
          </>
        }
      />
    </LinkBox>
  );
}
