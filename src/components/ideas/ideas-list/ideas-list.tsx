import * as ideasMap from "@/content/ideas";

import { ContentList } from "../../content-list";

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
