import { ArticleMeta } from "@/framework/client";

import { ContentListItemSmall } from "../../../content-list";
import { DateFormats, DateView } from "../../../date";
import { Link } from "../../../link";
import { LinkBoxTitle, LinkBoxTitleSizes } from "../../../link-box";
import { Text, TextTypes } from "../../../text";

export interface ArticlesListItemSmallProps {
  readonly articleMeta: ArticleMeta;
}

export function ArticlesListItemSmall(props: ArticlesListItemSmallProps) {
  const date = props.articleMeta.updatedDate ?? props.articleMeta.createdDate;

  return (
    <ContentListItemSmall
      mainSlot={
        <Link
          href={`articles/${props.articleMeta.slug}`}
          tooltip={{
            contents: props.articleMeta.title,
            hideIfChildrenNotOverflowing: true,
          }}
        >
          <LinkBoxTitle size={LinkBoxTitleSizes.Small}>
            {props.articleMeta.title}
          </LinkBoxTitle>
        </Link>
      }
      asideSlot={
        <Text type={TextTypes.PostDate} textAlign="right">
          <DateView format={DateFormats.Short}>{date}</DateView>
        </Text>
      }
    />
  );
}
