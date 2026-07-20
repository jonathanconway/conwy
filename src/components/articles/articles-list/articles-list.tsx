"use client";

import { difference, orderBy } from "lodash";

import { Article, Post } from "@/framework/client";

import { ContentList, ContentListSmall } from "../../content-list";
import { useTagFiltersResults } from "../../filters";
import { MicrosListItem } from "../../micros";
import {
  ARTICLES_RECENT_LIST_REST_COUNT,
  ARTICLES_RECENT_LIST_TILE_COUNT,
} from "../articles.const";

import { ArticlesListItem } from "./articles-list-item";
import { ArticlesListItemSmall } from "./articles-list-item-small";

interface ArticlesListProps {
  readonly items: readonly Post[];
  readonly limitSmallListItems?: boolean;
}

export function ArticlesList(props: ArticlesListProps) {
  const { items, limitSmallListItems } = props;

  const { filteredItems } = useTagFiltersResults({
    items,
    contentType: "article",
    tagField: "meta.tags",
  });

  const itemsSorted = orderBy(
    filteredItems,
    (item) => item.meta.updatedDate,
    "desc",
  );

  const itemsTiled = itemsSorted
    .filter((item) => item.meta.isPinned)
    .slice(0, ARTICLES_RECENT_LIST_TILE_COUNT);
  const itemsRest = difference(itemsSorted, itemsTiled)
    .filter((item) => item.meta.type === "article")
    .slice(
      0,
      limitSmallListItems ? ARTICLES_RECENT_LIST_REST_COUNT : undefined,
    ) as Article[];

  return (
    <>
      <ContentList>
        {itemsTiled
          .map((item) => {
            switch (item.meta.type) {
              case "article":
                return <ArticlesListItem key={item.meta.slug} {...item.meta} />;
              case "micro":
                return (
                  <MicrosListItem key={item.meta.slug} microMeta={item.meta} />
                );
              default:
                null;
            }
          })
          .filter(Boolean)}
      </ContentList>

      <ContentListSmall>
        {itemsRest.map((item) => (
          <ArticlesListItemSmall key={item.meta.slug} articleMeta={item.meta} />
        ))}
      </ContentListSmall>
    </>
  );
}
