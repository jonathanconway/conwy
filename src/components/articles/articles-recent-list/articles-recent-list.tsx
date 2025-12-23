"use client";

import { Post } from "@/framework/client";

import { Heading } from "../../heading";
import { Link } from "../../link";
import { Stack } from "../../stack";
import { Text } from "../../text";
import { ArticlesList } from "../articles-list";

interface ArticlesRecentListProps {
  readonly items: readonly Post[];
}

export function ArticlesRecentList(props: ArticlesRecentListProps) {
  const { items } = props;

  return (
    <Stack>
      <Heading level={2}>Pinned posts</Heading>

      <ArticlesList items={items} />

      <Text>
        <Link href="/articles">More articles...</Link>
      </Text>
    </Stack>
  );
}
