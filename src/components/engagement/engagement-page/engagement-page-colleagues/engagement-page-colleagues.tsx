import { sentenceCase } from "@/framework";

import { IconTypes } from "../../../icon";
import { Link, LinkLayoutTypes } from "../../../link";
import { ListExpandable, ListItem, ListUnordered } from "../../../list";
import { Section } from "../../../section";
import { TextSizes } from "../../../text";

import * as styles from "./engagement-page-colleagues.css";
import { EngagementPageColleaguesProps } from "./engagement-page-colleagues.types";

export function EngagementPageColleagues(props: EngagementPageColleaguesProps) {
  if (!props.colleagueRelationships?.length) {
    return null;
  }

  return (
    <Section label="Colleagues">
      <ListUnordered className={styles.engagementPageColleaguesList}>
        <ListExpandable
          listItems={props.colleagueRelationships.map(
            ({ colleague, relationshipType }) => (
              <ListItem
                key={colleague.fullName}
                className={styles.engagementPageColleaguesListItem}
              >
                <Link
                  size={TextSizes.XS}
                  href={colleague.meta.links[0].url}
                  icon={IconTypes.Person}
                  tooltip={{ contents: sentenceCase(relationshipType) }}
                  target="_blank"
                  layoutType={LinkLayoutTypes.Compact}
                >
                  {colleague.fullName}
                </Link>
              </ListItem>
            ),
          )}
        />
      </ListUnordered>
    </Section>
  );
}
