import { Icon, IconTypes } from "../../icon";
import { ListExpandable } from "../../list";
import { Section } from "../../section";

import * as styles from "./work-projects.css";
import { WorkProjectsProps } from "./work-projects.types";

export function WorkProjects(props: WorkProjectsProps) {
  if (props.projects.length === 0) {
    return null;
  }

  return (
    <Section label="Projects">
      <ul>
        <ListExpandable
          listItems={props.projects.map((project) => (
            <li key={project.title} className={styles.item}>
              <Icon className={styles.icon} icon={IconTypes.CheckBox} />
              <span className={styles.title}>{project.title}</span>
            </li>
          ))}
        />
      </ul>
    </Section>
  );
}
