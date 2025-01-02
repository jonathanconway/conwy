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

export function ArticlesRecentList({ items }: ArticlesRecentListProps) {
  return (
    <Stack>
      <Heading level={2}>Recent posts</Heading>

      <ArticlesList items={items} />

      <Text>
        <Link href="/articles">More articles...</Link>
      </Text>
    </Stack>
  );
}
