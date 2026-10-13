import { ProjectMeta, WorkMeta } from "@/framework";

import { ListItem, ListItemSizes, ListUnordered } from "../../list";
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
      <ListUnordered noBullets>
        {props.itemMeta.techs.map((tech) => (
          <ListItem key={tech.categoryName}>
            {tech.categoryName}

            <ListUnordered className={styles.itemTechsSubItems} noBullets>
              {tech.items.map((item) => (
                <ListItem key={item.itemName} size={ListItemSizes.Small}>
                  {item.itemName}
                </ListItem>
              ))}
            </ListUnordered>
          </ListItem>
        ))}
      </ListUnordered>
    </Section>
  );
}
