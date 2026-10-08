import { ProjectMeta, WorkMeta } from "@/framework/client";

import { ListItem, UnorderedList } from "../../list";
import { Section } from "../../section";

import * as styles from "./item-techs.css";

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
      <UnorderedList className={styles.techList}>
        {props.itemMeta.techs.map((tech) => (
          <ListItem key={tech.categoryName} className={styles.techListItem}>
            {tech.categoryName}

            <UnorderedList className={styles.techSubList}>
              {tech.items.map((item) => (
                <ListItem
                  key={item.itemName}
                  className={styles.techSubListItem}
                >
                  {item.itemName}
                </ListItem>
              ))}
            </UnorderedList>
          </ListItem>
        ))}
      </UnorderedList>
    </Section>
  );
}
