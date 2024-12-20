"use client";

import { Post } from "@/framework/client";

import { Heading } from "../../heading";
import { Link } from "../../link";
import { ArticlesList } from "../articles-list";

import * as styles from "./articles-recent-list.styles";

interface ArticlesRecentListProps {
  readonly items: readonly Post[];
}

export function ArticlesRecentList({ items }: ArticlesRecentListProps) {
  return (
    <div className={styles.container}>
      <Heading className={styles.h2} level={2}>
        Recent posts
      </Heading>

      <ArticlesList items={items} />

      <div className={styles.bodyText}>
        <Link href="/articles">More articles...</Link>
      </div>
    </div>
  );
}
