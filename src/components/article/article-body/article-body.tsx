import { Article as Article_ } from "@/framework";

import { MdxContainer } from "../../mdx";

export interface ArticleBodyProps {
  readonly article: Article_;
}

export function ArticleBody(props: ArticleBodyProps) {
  return <MdxContainer>{props.article.content}</MdxContainer>;
}
