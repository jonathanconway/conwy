import { sentenceCase } from "@/framework/client";

import { Fragment } from "../fragments";
import { SectionHeading } from "../heading";
import { Link } from "../link";
import { TextSizes } from "../text";

import { getStudiesList } from "./get-studies-list";
import * as styles from "./studies-list.css";
import { Study } from "./study";

export function StudiesList() {
  const { sectionKeys, studiesBySectionEntries } = getStudiesList();

  return (
    <div>
      <Fragment>
        <ul>
          {sectionKeys.map((section) => (
            <li key={section}>
              <Link href={`#${section}`} size={TextSizes.sm}>
                {sentenceCase(section)}
              </Link>
            </li>
          ))}
        </ul>
      </Fragment>

      <div className={styles.sectionsList}>
        {studiesBySectionEntries.map(([section, studies]) => (
          <div className={styles.studiesList}>
            <SectionHeading>{sentenceCase(section)}</SectionHeading>

            {studies.map((study) => (
              <Study key={study.slug} study={study} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
