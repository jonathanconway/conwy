import { IconTypes } from "../../../icon";
import { ListExpandable, ListItemWithIcon, ListUnordered } from "../../../list";
import { Section } from "../../../section";

import { WorkPageProjectsProps } from "./work-page-projects-props";

export function WorkPageProjects(props: WorkPageProjectsProps) {
  if (props.projects.length === 0) {
    return null;
  }

  return (
    <Section label="Projects">
      <ListUnordered noBullets>
        <ListExpandable
          listItems={props.projects.map((project) => (
            <ListItemWithIcon key={project.title} icon={IconTypes.CheckBox}>
              {project.title}
            </ListItemWithIcon>
          ))}
        />
      </ListUnordered>
    </Section>
  );
}
