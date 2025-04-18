import { NoteMeta, sortNoteMetas } from "@/framework/client";

import { ContentList } from "../content-list";

import { NotesListItem } from "./notes-list-item";

interface NotesProps {
  readonly noteMetas: readonly NoteMeta[];
}

export function Notes({ noteMetas }: NotesProps) {
  const sortedWorkHistoryListItems = sortNoteMetas(noteMetas);

  return (
    <ContentList>
      {sortedWorkHistoryListItems.map((workHistoryListItem) => (
        <NotesListItem
          key={workHistoryListItem.slug}
          noteMeta={workHistoryListItem}
        />
      ))}
    </ContentList>
  );
}
