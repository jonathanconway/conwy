"use client";

import { Post, PostTag, PostTags } from "@/framework/client";

import { Link } from "../../link";
import { Stack } from "../../stack";
import { Text } from "../../text";

import { ArticlesRecentListSection } from "./articles-recent-list-section";

interface ArticlesRecentListProps {
  readonly items: readonly Post[];
}

const RECENTS_SECTION_TAGS: readonly PostTag[] = [
  PostTags.SoftwareDevelopment,
  PostTags.Design,
  PostTags.Learning,
  PostTags.Life,
];

export function ArticlesRecentList(props: ArticlesRecentListProps) {
  const { items } = props;

  return (
    <Stack gap={2}>
      <Stack>
        {RECENTS_SECTION_TAGS.map((postTag) => (
          <ArticlesRecentListSection
            key={postTag}
            items={items}
            postTag={postTag}
          />
        ))}
      </Stack>

      <Text>
        <Link href="/articles">All articles...</Link>
      </Text>
    </Stack>
  );
}
