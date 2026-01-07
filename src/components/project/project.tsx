import { Project as Project_ } from "@/framework/client";

import { Heading } from "../heading";
import { Section } from "../section";

import { ProjectImageCascade } from "./product-image-cascade";
import { ProjectBody } from "./project-body";
import { ProjectLinks } from "./project-links";
import { ProjectMainImage } from "./project-main-image";
import { ProjectNav } from "./project-nav";
import { ProjectPlatforms } from "./project-platforms";
import { ProjectTechs } from "./project-techs";
import * as styles from "./project.css";

interface ProjectProps {
  readonly project: Project_;
}

export function Project(props: ProjectProps) {
  const {
    project: { meta },
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.headerLeftImage}>
            <ProjectMainImage projectMeta={meta} />
          </div>

          <div className={styles.headerLeftTitle}>
            <Heading level={2}>{meta.title}</Heading>

            <div className={styles.blurb}>{meta.blurb}</div>
          </div>
        </div>

        <div className={styles.headerRight}>
          <ProjectNav projectMeta={meta} />
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.body}>
          <Section label="Summary">
            <ProjectBody project={props.project} />
          </Section>
        </div>

        <div className={styles.aside}>
          <div className={styles.techAndOtherContainer}>
            <ProjectTechs projectMeta={meta} />

            <div className={styles.otherContainer}>
              <ProjectLinks projectMeta={meta} />

              <ProjectPlatforms projectMeta={meta} />
            </div>
          </div>

          <ProjectImageCascade projectMeta={meta} />
        </div>
      </div>
    </div>
  );
}
