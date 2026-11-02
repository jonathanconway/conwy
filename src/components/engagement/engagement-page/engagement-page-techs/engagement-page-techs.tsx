import { Engagement } from "@/framework";

import {
  ListItemSpacingStrategies,
  ListSpacingStrategies,
} from "../../../list";
import { ListItem, ListItemSizes, ListUnordered } from "../../../list";
import { Section } from "../../../section";

interface EngagementPageTechsProps {
  readonly engagement: Engagement;
}

export function EngagementPageTechs(props: EngagementPageTechsProps) {
  if (props.engagement.meta.techs.length === 0) {
    return null;
  }

  return (
    <Section label="Tech">
      <div>
        <ListUnordered
          noBullets
          listItemSpacingStrategy={
            ListItemSpacingStrategies.IncludeExceptFirstChild
          }
          listSpacingStrategy={ListSpacingStrategies.Exclude}
        >
          {props.engagement.meta.techs.map((tech) => (
            <ListItem key={tech.categoryName}>
              {tech.categoryName}

              {tech.items.length > 0 && (
                <ListUnordered
                  noBullets
                  listSpacingStrategy={ListSpacingStrategies.Exclude}
                >
                  {tech.items.map((item) => (
                    <ListItem key={item.itemName} size={ListItemSizes.Small}>
                      {item.itemName}
                    </ListItem>
                  ))}
                </ListUnordered>
              )}
            </ListItem>
          ))}
        </ListUnordered>
      </div>
    </Section>
  );
}
