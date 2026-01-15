import { TextSizes } from "@/components/text";
import { sentenceCase } from "@/framework/client";

import { IconTypes } from "../../icon";
import { Link, LinkLayoutTypes } from "../../link";
import { ListExpandable } from "../../list";
import { Section } from "../../section";

import * as styles from "./work-colleagues.css";
import { WorkProjectsProps } from "./work-colleagues.types";

export function WorkColleagues(props: WorkProjectsProps) {
  if (!props.colleagueRelationships?.length) {
    return null;
  }

  return (
    <Section label="Colleagues">
      <ul>
        <ListExpandable
          listItems={props.colleagueRelationships.map(
            ({ colleague, relationshipType }) => (
              <li key={colleague.fullName} className={styles.item}>
                <Link
                  size={TextSizes.sm}
                  href={colleague.meta.links[0].url}
                  icon={IconTypes.Person}
                  tooltip={{ contents: sentenceCase(relationshipType) }}
                  target="_blank"
                  layoutType={LinkLayoutTypes.Compact}
                >
                  {colleague.fullName}
                </Link>
              </li>
            ),
          )}
        />
      </ul>
    </Section>
  );
}
