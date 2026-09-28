import { orderBy } from "lodash";

import { Commentary, ContentLinkInfo, Slug } from "@/framework/client";

import { ContentList } from "../content-list";

import { CommentariesListItem } from "./commentaries-list-item";

interface CommentariesProps {
  readonly commentaries: readonly Commentary[];
  readonly commentarySourceContentLinkInfos: Record<Slug, ContentLinkInfo>;
}

export function Commentaries(props: CommentariesProps) {
  const { commentaries, commentarySourceContentLinkInfos } = props;
  const commentariesSorted = orderBy(commentaries, "date", "desc");

  return (
    <ContentList>
      {commentariesSorted.map((commentary) => (
        <CommentariesListItem
          key={commentary.meta.slug}
          commentary={commentary}
          sourceLinkInfo={
            commentarySourceContentLinkInfos[commentary.meta.slug]
          }
        />
      ))}
    </ContentList>
  );
}
