import { ProjectMeta, WorkMeta } from "@/framework/client";

import { Section } from "../../section";

import * as styles from "./item-techs.styles";

interface ItemTechsProps<TMeta extends WorkMeta | ProjectMeta> {
  readonly itemMeta: TMeta;
}

export function ItemTechs<TMeta extends WorkMeta | ProjectMeta>(
  props: ItemTechsProps<TMeta>,
) {
  if (props.itemMeta.techs.length === 0) {
    return null;
  }

  return (
    <Section label="Tech">
      <ul className={styles.techList}>
        {props.itemMeta.techs.map((tech) => (
          <li key={tech.categoryName} className={styles.techListItem}>
            {tech.categoryName}

            <ul className={styles.techSubList}>
              {tech.items.map((item) => (
                <li key={item.itemName} className={styles.techSubListItem}>
                  {item.itemName}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
