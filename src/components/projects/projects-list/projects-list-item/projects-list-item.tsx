import Image from "next/image";

import { POST_MAIN_IMAGE_DEFAULT, ProjectMeta } from "@/framework/client";

import { LinkBox } from "../../../link-box";
import { SocialLinksIcons } from "../../../social-links";

import * as styles from "./projects-list-item.styles";

interface ProjectsListItemProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectsListItem(props: ProjectsListItemProps) {
  const { projectMeta } = props;

  return (
    <LinkBox className={styles.container} href={`projects/${projectMeta.slug}`}>
      <div className={styles.mainColumn}>
        <div>
          <div className={styles.title}>{projectMeta.title}</div>

          <p className={styles.blurb}>{projectMeta.blurb}</p>
        </div>
      </div>
      <div className={styles.asideColumn}>
        <Image
          className={styles.image}
          src={`/images/projects/${projectMeta.slug}/${projectMeta.mainImage ?? POST_MAIN_IMAGE_DEFAULT}`}
          alt="Project main image"
          priority
          unoptimized={true}
          width={96}
          height={64}
        />

        {projectMeta.socialLinks && (
          <SocialLinksIcons socialLinks={projectMeta.socialLinks} />
        )}

        <span className={styles.type}>{projectMeta.subType}</span>
      </div>
    </LinkBox>
  );
}
