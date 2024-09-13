"use client";

import { Post, getAreSomeSame, getItemsTags } from "@/framework/client";

import { MicroListItem } from "../../micros/micro-list-item";
import { ArticleListItem } from "../article-list-item";
import { ALL } from "../tag-filters";
import { useTagFiltersSwitch } from "../tag-filters/use-tag-filters-switch.hook";

import * as styles from "./articles-list.styles";

interface ArticlesListProps {
  readonly items: readonly Post[];
}

export function ArticlesList({ items }: ArticlesListProps) {
  const allTags = getItemsTags(items);

  const { selectedTags } = useTagFiltersSwitch(allTags);

  const filteredItems = selectedTags.includes(ALL)
    ? items
    : items.filter((item) => getAreSomeSame(item.meta.tags, selectedTags));

  return (
    <div className={styles.articles}>
      {filteredItems
        .map((item) => {
          switch (item.meta.type) {
            case "article":
              return <ArticleListItem key={item.meta.slug} {...item.meta} />;
            case "micro":
              return (
                <MicroListItem key={item.meta.slug} microMeta={item.meta} />
              );
            default:
              null;
          }
        })
        .filter(Boolean)}
    </div>
  );
}
