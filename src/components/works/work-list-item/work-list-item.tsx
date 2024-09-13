import { WorkMeta } from "@/framework/client";

import { Link } from "../../link";
import { Tooltip } from "../../tooltip";
import { WorkMainImage } from "../../work";

import * as styles from "./work-list-item.styles";

interface WorkListItemProps {
  readonly workMeta: WorkMeta;
}

export function WorkListItem(props: WorkListItemProps) {
  const { workMeta } = props;

  const techNames = workMeta.techs.map((tech) => tech.categoryName).join(", ");

  return (
    <Link className={styles.container} href={`work/${workMeta.slug}`} target="">
      <div className={styles.mainColumn}>
        {/* <div className={styles.date}>
          <Date format="MMM yyyy">{startDate}</Date>
          <span> - </span>
          <Date format="MMM yyyy">{endDate}</Date>
        </div> */}

        <div className={styles.title}>{workMeta.client}</div>

        <p className={styles.subTitle}>{workMeta.jobTitle}</p>

        <p className={styles.blurb}>{workMeta.blurbShort}</p>

        <Tooltip
          contents={
            <ul>
              {workMeta.techs.map((tech) => (
                <li key={tech.categoryName}>{tech.categoryName}</li>
              ))}
            </ul>
          }
        >
          <p className={styles.techs}>Tech: {techNames}</p>
        </Tooltip>
      </div>
      <div className={styles.asideColumn}>
        <WorkMainImage workMeta={props.workMeta} />

        {/* {socialLinks && <SocialLinks socialLinks={socialLinks} />} */}

        {/* <span className={styles.type}>{type}</span> */}
      </div>
    </Link>
  );
}
