import { Article as Article_ } from "@/framework/client";

import { MdxWrapper } from "../../mdx";

export interface ArticleBodyProps {
  readonly article: Article_;
}

export function ArticleBody(props: ArticleBodyProps) {
  return <MdxWrapper>{props.article.content}</MdxWrapper>;
}
