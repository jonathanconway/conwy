"use client";

import { ContentList } from "@/components";
import * as ideasMap from "@/content/ideas";

import { IdeasListItem } from "./ideas-list-item";

export function IdeasList() {
  const ideas = Object.values(ideasMap);

  return (
    <ContentList>
      {ideas.map((idea) => (
        <IdeasListItem key={idea.meta.slug} idea={idea} />
      ))}
    </ContentList>
  );
}
