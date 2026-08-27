import { CommentaryMeta, sortCommentaryMetas } from "@/framework/client";

import { ContentList } from "../content-list";

import { CommentariesListItem } from "./commentaries-list-item";

interface CommentariesProps {
  readonly commentaryMetas: readonly CommentaryMeta[];
}

export function Commentaries(props: CommentariesProps) {
  const { commentaryMetas } = props;

  const sortedWorkHistoryListItems = sortCommentaryMetas(commentaryMetas);

  return (
    <ContentList>
      {sortedWorkHistoryListItems.map((workHistoryListItem) => (
        <CommentariesListItem
          key={workHistoryListItem.slug}
          commentaryMeta={workHistoryListItem}
        />
      ))}
    </ContentList>
  );
}
