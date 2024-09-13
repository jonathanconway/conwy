import { WorkMeta, sortWorkMetas } from "@/framework/client";

import { WorkListItem } from "./work-list-item";
import * as styles from "./works.styles";

interface WorksProps {
  readonly workMetas: readonly WorkMeta[];
}

export function Works({ workMetas }: WorksProps) {
  const sortedWorkHistoryListItems = sortWorkMetas(workMetas);

  return (
    <div className={styles.container()}>
      {sortedWorkHistoryListItems.map((workHistoryListItem) => (
        <WorkListItem
          key={workHistoryListItem.slug}
          workMeta={workHistoryListItem}
        />
      ))}
    </div>
  );
}
