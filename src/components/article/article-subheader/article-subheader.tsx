import { Article as Article_ } from "@/framework";

import { generateContentPageSubHeaderLinks } from "../../content-page";
import { PageSubHeaderLayout } from "../../page/page-subheader";

import { ArticleSubHeaderTags } from "./article-subheader-tags";

export interface ArticleSubHeaderProps {
  readonly article: Article_;
}

export function ArticleSubHeader(props: ArticleSubHeaderProps) {
  const { article } = props;

  const linksSlot = [
    ...generateContentPageSubHeaderLinks({
      content: article,
    }),
    <ArticleSubHeaderTags
      key="article-subheader-tags"
      tags={props.article.meta.tags}
    />,
  ];

  return <PageSubHeaderLayout linksSlot={linksSlot} />;
}
