import { ArticleMeta } from "@/framework/client";

import { ContentListItemSmall } from "../../../content-list";
import { DateFormats, DateView } from "../../../date";
import { Image } from "../../../image";
import { LinkBox, LinkBoxTitle, LinkBoxTitleSizes } from "../../../link-box";
import { Text, TextTypes } from "../../../text";

export interface ArticlesListItemSmallProps {
  readonly articleMeta: ArticleMeta;
}

export function ArticlesListItemSmall(props: ArticlesListItemSmallProps) {
  const date = props.articleMeta.updatedDate ?? props.articleMeta.createdDate;

  return (
    <LinkBox
      href={`articles/${props.articleMeta.slug}`}
      tooltip={{
        contents: props.articleMeta.title,
        hideIfChildrenNotOverflowing: true,
      }}
      iconSlot={
        props.articleMeta.smallImage && (
          <Image image={props.articleMeta.smallImage} width={20} height={20} />
        )
      }
    >
      <ContentListItemSmall
        mainSlot={
          <LinkBoxTitle size={LinkBoxTitleSizes.Small}>
            {props.articleMeta.title}
          </LinkBoxTitle>
        }
        asideSlot={
          <Text type={TextTypes.PostDate} textAlign="right">
            <DateView format={DateFormats.Short}>{date}</DateView>
          </Text>
        }
      />
    </LinkBox>
  );
}
