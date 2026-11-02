"use client";

import { ContentTypes, POST_TAG_TITLES, PostTags } from "@/framework";

import { TagFilters, TagFiltersTag } from "../../filters";

export function ArticlesTagFilters() {
  const articlesTagFilterTags: readonly TagFiltersTag[] = Object.values(
    PostTags,
  ).map((slug) => ({ slug, title: POST_TAG_TITLES[slug] }));

  return (
    <TagFilters
      contentType={ContentTypes.Article}
      tags={articlesTagFilterTags}
      tagField="meta.tags"
    />
  );
}
