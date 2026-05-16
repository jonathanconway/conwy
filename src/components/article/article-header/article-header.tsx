import { Article as Article_ } from "@/framework/client";

import { ContentPageHeader } from "../../content-page";

import { ArticleHeaderTags } from "./article-header-tags";

export interface ArticleHeaderProps {
  readonly article: Article_;
}

export function ArticleHeader(props: ArticleHeaderProps) {
  return (
    <ContentPageHeader
      preHeader={null}
      content={props.article}
      title={props.article.meta.title}
      createdDate={props.article.meta.createdDate}
      updatedDate={props.article.meta.updatedDate}
      subHeader={<ArticleHeaderTags tags={props.article.meta.tags} />}
    />
  );
}
