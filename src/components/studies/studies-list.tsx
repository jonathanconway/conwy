"use client";

import * as studies_ from "@/content/studies";
import { sentenceCase } from "@/framework/client";

import { TagFilters, useTagFiltersResults } from "../filters";
import { Fragment } from "../fragments";
import { SectionHeading } from "../heading";
import { Link } from "../link";
import { TextSizes } from "../text";

import { getStudiesList } from "./get-studies-list";
import * as styles from "./studies-list.css";
import { Study } from "./study";

export function StudiesList() {
  const studyItems = Object.values(studies_);

  const { filteredItems: studies } = useTagFiltersResults({
    items: studyItems,
    contentType: "study",
    tagField: "category",
  });

  const { sectionKeys, studiesBySectionEntries } = getStudiesList(studies);

  return (
    <>
      <TagFilters contentType="study" items={studyItems} tagField="category" />

      {sectionKeys.length > 1 && (
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
      )}

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
    </>
  );
}
