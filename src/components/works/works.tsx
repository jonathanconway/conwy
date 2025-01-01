import { WorkMeta, sortWorkMetas } from "@/framework/client";

import { List } from "../list";

import { WorkListItem } from "./work-list-item";

interface WorksProps {
  readonly workMetas: readonly WorkMeta[];
}

export function Works({ workMetas }: WorksProps) {
  const sortedWorkHistoryListItems = sortWorkMetas(workMetas);

  return (
    <List>
      {sortedWorkHistoryListItems.map((workHistoryListItem) => (
        <WorkListItem
          key={workHistoryListItem.slug}
          workMeta={workHistoryListItem}
        />
      ))}
    </List>
  );
}
