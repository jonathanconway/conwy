import { Icon, IconTypes } from "../../icon";
import { ListExpandable, ListItem, ListUnordered } from "../../list";
import { Section } from "../../section";

import * as styles from "./work-projects.css";
import { WorkProjectsProps } from "./work-projects.types";

export function WorkProjects(props: WorkProjectsProps) {
  if (props.projects.length === 0) {
    return null;
  }

  return (
    <Section label="Projects">
      <ListUnordered className={styles.workProjectsList}>
        <ListExpandable
          listItems={props.projects.map((project) => (
            <ListItem
              key={project.title}
              className={styles.workProjectsListItem}
            >
              {/* todo: add icon prop to ListItem and use it here */}
              <Icon
                className={styles.workProjectsListItemIcon}
                icon={IconTypes.CheckBox}
              />
              <span className={styles.workProjectsListItemTitle}>
                {project.title}
              </span>
            </ListItem>
          ))}
        />
      </ListUnordered>
    </Section>
  );
}
