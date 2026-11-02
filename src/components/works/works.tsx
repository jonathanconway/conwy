import { Work, sortWorks } from "@/framework";

import { ContentList } from "../content-list";

import { WorkListItem } from "./work-list-item";

interface WorksProps {
  readonly works: readonly Work[];
}

export function Works(props: WorksProps) {
  const { works } = props;
  const worksSorted = sortWorks(works);

  return (
    <ContentList>
      {worksSorted.map((work) => (
        <WorkListItem key={work.meta.slug} work={work} />
      ))}
    </ContentList>
  );
}
