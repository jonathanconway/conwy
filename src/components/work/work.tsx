import { Work as Work_ } from "@/framework/client";

import { MdxH2 } from "../mdx";
import { WorkMainImage } from "../work";

import { WorkBody } from "./work-body";
import { WorkFeedbackCarousel } from "./work-feedback-carousel";
import { WorkImageCascade } from "./work-image-cascade";
import { WorkNav } from "./work-nav";
import { WorkProjects } from "./work-projects";
import { WorkTechs } from "./work-techs";
import * as styles from "./work.styles";

interface WorkProps {
  readonly work: Work_;
}

export function Work({ work }: WorkProps) {
  const { meta: workMeta } = work;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.headerLeftImage}>
            <WorkMainImage workMeta={workMeta} />
          </div>
          <div className={styles.headerLeftTitle}>
            <MdxH2 className={styles.client}>{workMeta.client}</MdxH2>

            <div className={styles.jobTitle}>{workMeta.jobTitle}</div>
          </div>
        </div>

        <div className={styles.headerRight}>
          <WorkNav workMeta={workMeta} />
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.blurb}>
          <WorkBody work={work} />
        </div>

        <div className={styles.aside}>
          <div className={styles.techAndFeedbackContainer}>
            <WorkTechs workMeta={workMeta} />

            <div className={styles.otherContainer}>
              <WorkFeedbackCarousel workFeedbacks={workMeta.feedbacks} />

              <WorkProjects projects={workMeta.projects} />
            </div>
          </div>

          <div className={styles.imageCascadeContainer}>
            <WorkImageCascade work={work} />
          </div>
        </div>
      </div>
    </div>
  );
}
