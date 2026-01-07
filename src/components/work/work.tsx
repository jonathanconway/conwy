import { Work as Work_ } from "@/framework/client";

import { Heading } from "../heading";
import { WorkMainImage } from "../work";

import { WorkBody } from "./work-body";
import { WorkColleagues } from "./work-colleagues";
import { WorkFeedbackCarousel } from "./work-feedback-carousel";
import { WorkImageCascade } from "./work-image-cascade";
import { WorkLinks } from "./work-links";
import { WorkNav } from "./work-nav";
import { WorkProjects } from "./work-projects";
import { WorkTechs } from "./work-techs";
import * as styles from "./work.css";

interface WorkProps {
  readonly work: Work_;
}

export function Work(props: WorkProps) {
  const {
    work: { meta },
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.headerLeftImage}>
            <WorkMainImage workMeta={meta} />
          </div>

          <div className={styles.headerLeftTitle}>
            <Heading level={2}>{meta.client}</Heading>

            <div className={styles.jobTitle}>{meta.jobTitle}</div>
          </div>
        </div>

        <div className={styles.headerRight}>
          <WorkNav workMeta={meta} />
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.blurb}>
          <WorkBody work={props.work} />
        </div>

        <div className={styles.aside}>
          <div className={styles.techAndFeedbackContainer}>
            <WorkTechs workMeta={meta} />

            <div className={styles.otherContainer}>
              <WorkFeedbackCarousel workFeedbacks={meta.feedbacks} />

              <WorkProjects projects={meta.projects} />

              <WorkColleagues
                colleagueRelationships={meta.colleagueRelationships}
              />

              <WorkLinks workMeta={meta} />
            </div>
          </div>

          <WorkImageCascade work={props.work} />
        </div>
      </div>
    </div>
  );
}
