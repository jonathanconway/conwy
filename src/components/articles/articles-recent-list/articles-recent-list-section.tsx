import { Post, PostTag } from "@/framework/client";
import { POST_TAG_TITLES } from "@/framework/client";

import { Heading } from "../../heading";
import { Link } from "../../link";
import { Text } from "../../text";
import { ArticlesList } from "../articles-list";

interface ArticlesRecentListSectionProps {
  readonly postTag: PostTag;
  readonly items: readonly Post[];
}

export function ArticlesRecentListSection(
  props: ArticlesRecentListSectionProps,
) {
  const sectionItems = props.items
    .filter((item) => item.meta.tags.includes(props.postTag))
    .slice(0, 6);

  const postTagTitle = POST_TAG_TITLES[props.postTag];

  return (
    <>
      <Heading level={2}>{postTagTitle}</Heading>

      <ArticlesList items={sectionItems} />

      <Text>
        <Link href={`/articles?article-meta.tags-tag=${props.postTag}`}>
          More on {postTagTitle.toLowerCase()}...
        </Link>
      </Text>
    </>
  );
}
