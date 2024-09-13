import { Icon, IconTypes } from "../../icon";
import { Section } from "../../section";

import moduleStyles from "./work-projects.module.css";
import * as styles from "./work-projects.styles";
import { WorkProjectsProps } from "./work-projects.types";

export function WorkProjects(props: WorkProjectsProps) {
  if (props.projects.length === 0) {
    return null;
  }

  return (
    <Section label="Projects">
      <ul className={styles.container}>
        {props.projects.map((project) => (
          <li key={project.title} className={styles.item}>
            <Icon className={moduleStyles.icon} icon={IconTypes.CheckBox} />
            <span className={styles.title}>{project.title}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
