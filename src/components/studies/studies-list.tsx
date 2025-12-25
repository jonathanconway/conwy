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

  const studiesCategoryTagFiltersParams = {
    items: studyItems,
    contentType: "study",
    tagField: "meta.category",
  };
  const { filteredItems: studiesFilteredByCategory } = useTagFiltersResults(
    studiesCategoryTagFiltersParams,
  );

  const studiesStatusTagFiltersParams = {
    items: studiesFilteredByCategory,
    contentType: "study",
    tagField: "meta.status",
  };
  const {
    filteredItems: studiesFilteredByCategoryAndStatus,
    isFiltered: isFilteredByCategory,
  } = useTagFiltersResults(studiesStatusTagFiltersParams);

  const { studiesBySectionEntries } = getStudiesList(
    studiesFilteredByCategoryAndStatus,
  );

  return (
    <>
      <TagFilters {...studiesCategoryTagFiltersParams} />
      <TagFilters {...studiesStatusTagFiltersParams} />

      <div className={styles.sectionsList}>
        {studiesBySectionEntries.map(([section, studies]) => (
          <div key={section} className={styles.studiesList}>
            {!isFilteredByCategory && (
              <SectionHeading>{sentenceCase(section)}</SectionHeading>
            )}

            {studies.map((study) => (
              <Study key={study.meta.slug} study={study} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
