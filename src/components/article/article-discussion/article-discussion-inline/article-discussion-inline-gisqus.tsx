"use client";

import Giscus from "@giscus/react";

import { useSelectedTheme } from "@/components/theme";

export function ArticleDiscussionInlineGisqus() {
  const { selectedTheme } = useSelectedTheme();
  return (
    <Giscus
      id="comments"
      repo="jonathanconway/conwy"
      repoId="R_kgDOGI-HNA"
      category="Announcements"
      categoryId="DIC_kwDOGI-HNM4C4qZ0"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={selectedTheme}
      lang="en"
      loading="lazy"
    />
  );
}
