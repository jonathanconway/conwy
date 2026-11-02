import { Article } from "@/framework";

import { PostDiscussion } from "../../post";

interface ArticleDiscussionProps {
  readonly article: Article;
}

export function ArticleDiscussion(props: ArticleDiscussionProps) {
  return <PostDiscussion post={props.article} />;
}
