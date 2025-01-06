"use client";

import { Post } from "@/framework/client";

import { ContentList } from "../../content-list";
import { useTagFiltersResults } from "../../filters";
import { MicrosListItem } from "../../micros";

import { ArticlesListItem } from "./articles-list-item";

interface ArticlesListProps {
  readonly items: readonly Post[];
}

export function ArticlesList({ items }: ArticlesListProps) {
  const { filteredItems } = useTagFiltersResults({
    items,
    contentType: "article",
    tagField: "meta.tags",
  });

  return (
    <ContentList>
      {filteredItems
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
  );
}
