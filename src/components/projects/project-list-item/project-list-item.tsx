import Image from "next/image";
import Link from "next/link";

import { POST_MAIN_IMAGE_DEFAULT, ProjectMeta } from "@/framework/client";

import { SocialLinksIcons } from "../../social-links";

import * as styles from "./project-list-item.styles";

interface ProjectListItemProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectListItem(props: ProjectListItemProps) {
  const { projectMeta } = props;

  return (
    <div className={styles.container}>
      <div className={styles.mainColumn}>
        <Link href={`projects/${projectMeta.slug}`}>
          <div className={styles.title}>{projectMeta.title}</div>

          <p className={styles.blurb}>{projectMeta.blurb}</p>
        </Link>
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
    </div>
  );
}
