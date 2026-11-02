import { Project } from "@/framework";

import { Heading, HeadingLevels } from "../../../heading";
import { Text, TextTypes } from "../../../text";

import { ProjectPageHeaderMainImage } from "./project-page-header-main-image";
import { ProjectPageHeaderNav } from "./project-page-header-nav";
import * as styles from "./project-page-header.css";

interface ProjectPageHeaderProps {
  readonly project: Project;
  readonly projects: readonly Project[];
}

export function ProjectPageHeader(props: ProjectPageHeaderProps) {
  const { project, projects } = props;
  const { meta } = project;

  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.headerLeftImage}>
          <ProjectPageHeaderMainImage projectMeta={meta} />
        </div>

        <div className={styles.headerLeftTitle}>
          <Heading level={HeadingLevels.Level2}>{meta.title}</Heading>

          <Text type={TextTypes.SubTitle}>{meta.blurb}</Text>
        </div>
      </div>

      <div className={styles.headerRight}>
        <ProjectPageHeaderNav project={project} projects={projects} />
      </div>
    </div>
  );
}
