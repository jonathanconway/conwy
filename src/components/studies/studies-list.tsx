"use client";

import * as studies_ from "@/content/studies";
import { sentenceCase } from "@/framework/client";

import { TagFilters, useTagFiltersResults } from "../filters";
import { SectionHeading } from "../heading";

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

  const { studiesBySectionEntries } = getStudiesList(studies);

  return (
    <>
      <TagFilters contentType="study" items={studyItems} tagField="category" />

      <div className={styles.sectionsList}>
        {studiesBySectionEntries.map(([section, studies]) => (
          <div key={section} className={styles.studiesList}>
            <SectionHeading>{sentenceCase(section)}</SectionHeading>

            {studies.map((study) => (
              <Study key={study.meta.slug} study={study} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
