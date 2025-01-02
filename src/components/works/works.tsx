import { WorkMeta, sortWorkMetas } from "@/framework/client";

import { ContentList } from "../content-list";

import { WorkListItem } from "./work-list-item";

interface WorksProps {
  readonly workMetas: readonly WorkMeta[];
}

export function Works({ workMetas }: WorksProps) {
  const sortedWorkHistoryListItems = sortWorkMetas(workMetas);

  return (
    <ContentList>
      {sortedWorkHistoryListItems.map((workHistoryListItem) => (
        <WorkListItem
          key={workHistoryListItem.slug}
          workMeta={workHistoryListItem}
        />
      ))}
    </ContentList>
  );
}
