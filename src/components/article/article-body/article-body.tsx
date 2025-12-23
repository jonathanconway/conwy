import { Article as Article_ } from "@/framework/client";

import { Fragment } from "../../fragments";

export interface ArticleBodyProps {
  readonly article: Article_;
}

export function ArticleBody(props: ArticleBodyProps) {
  return <Fragment>{props.article.content}</Fragment>;
}
