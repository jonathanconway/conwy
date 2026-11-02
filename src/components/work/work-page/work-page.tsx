import { createWorksWorkRoute, worksRoute } from "@/app/routes";
import { Work as Work_ } from "@/framework";

import {
  EngagementPageFeedbackCarousel,
  EngagementPageLayout,
  EngagementPageLinks,
  EngagementPageTechs,
} from "../../engagement";
import { Page } from "../../page";

import { WorkPageColleagues } from "./work-page-colleagues";
import { WorkPageHeader } from "./work-page-header";
import { WorkPageImageCascade } from "./work-page-image-cascade";
import { WorkPageProjects } from "./work-page-projects";
import { WorkPageSummary } from "./work-page-summary";

interface WorkPageProps {
  readonly work: Work_;
  readonly works: readonly Work_[];
}

export function WorkPage(props: WorkPageProps) {
  const { work, works } = props;
  const { meta } = work;

  const workRoute = createWorksWorkRoute(work);

  return (
    <Page
      breadcrumbSegments={[worksRoute, { title: workRoute.title }]}
      title={<WorkPageHeader work={work} works={works} />}
    >
      <EngagementPageLayout
        summarySlot={<WorkPageSummary work={work} />}
        asideFirstLeftSlot={<EngagementPageTechs engagement={work} />}
        asideFirstRightSlot={
          <>
            <EngagementPageFeedbackCarousel
              engagementFeedbacks={meta.feedbacks}
            />

            <WorkPageProjects projects={meta.projects} />

            <WorkPageColleagues
              colleagueRelationships={meta.colleagueRelationships}
            />

            <EngagementPageLinks engagement={work} />
          </>
        }
        asideImagesSlot={<WorkPageImageCascade work={work} />}
      />
    </Page>
  );
}
