import { POST_TAG_TITLES, Post, PostTag } from "@/framework/client";

import { Heading, HeadingLevels } from "../../heading";
import { ItemsCount } from "../../items-count";
import { Link } from "../../link";
import { Stack, StackDirections, StackDistributions } from "../../stack";
import { Text, TextTypes } from "../../text";
import { ArticlesList } from "../articles-list";
import { ARTICLES_RECENT_LIST_TOTAL_COUNT } from "../articles.const";

interface ArticlesRecentListSectionProps {
  readonly postTag: PostTag;
  readonly items: readonly Post[];
}

export function ArticlesRecentListSection(
  props: ArticlesRecentListSectionProps,
) {
  const sectionItems = props.items.filter((item) =>
    item.meta.tags.includes(props.postTag),
  );

  const postTagTitle = POST_TAG_TITLES[props.postTag];

  return (
    <Stack>
      <Stack
        direction={StackDirections.Row}
        distribution={StackDistributions.Flow}
      >
        <Heading level={HeadingLevels.Level2}>{postTagTitle}</Heading>

        <ItemsCount count={sectionItems.length} />
      </Stack>

      <ArticlesList items={sectionItems} />

      {sectionItems.length > ARTICLES_RECENT_LIST_TOTAL_COUNT && (
        <Text type={TextTypes.Body}>
          <Link href={`/articles?article-meta.tags-tag=${props.postTag}`}>
            More on {postTagTitle.toLowerCase()}...
          </Link>
        </Text>
      )}
    </Stack>
  );
}
