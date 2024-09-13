import { Project as Project_ } from "@/framework/client";

import { MdxH2 } from "../mdx";
import { Section } from "../section";

import { ProjectImageCascade } from "./product-image-cascade";
import { ProjectBody } from "./project-body";
import { ProjectLinks } from "./project-links";
import { ProjectNav } from "./project-nav";
import { ProjectPlatforms } from "./project-platforms";
import { ProjectTechs } from "./project-techs";
import * as styles from "./project.styles";

interface ProjectProps {
  readonly project: Project_;
}

export function Project({ project }: ProjectProps) {
  const { meta: projectMeta } = project;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <MdxH2 className={styles.client}>{projectMeta.title}</MdxH2>

          <div className={styles.blurb}>{projectMeta.blurb}</div>
        </div>

        <div className={styles.headerRight}>
          <ProjectNav projectMeta={projectMeta} />
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.body}>
          <Section label="Summary">
            <ProjectBody project={project} />
          </Section>
        </div>

        <div className={styles.aside}>
          <div className={styles.techAndFeedbackContainer}>
            <ProjectTechs projectMeta={projectMeta} />

            <div className={styles.otherContainer}>
              <ProjectLinks projectMeta={projectMeta} />

              <ProjectPlatforms projectMeta={projectMeta} />
            </div>
          </div>

          <div className={styles.imageCascadeContainer}>
            <ProjectImageCascade projectMeta={project.meta} />
          </div>
        </div>
      </div>
    </div>
  );
}
