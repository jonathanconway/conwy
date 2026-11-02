"use client";

import * as studiesMap from "@/content/studies";
import {
  ContentTypes,
  STUDY_CATEGORY_LABELS,
  STUDY_STATUS_LABELS,
  StudyCategories,
  StudyStatuses,
  sentenceCase,
} from "@/framework";

import { TagFilters, useTagFiltersResults } from "../filters";
import { SectionHeading } from "../heading";
import { Stack } from "../stack";

import { getStudiesList } from "./get-studies-list";
import * as styles from "./studies-list.css";
import { Study } from "./study";

export function StudiesList() {
  const studyItems = Object.values(studiesMap);

  const studiesCategoryTagFiltersParams = {
    items: studyItems,
    contentType: "study",
    tagField: "meta.category",
  };
  const { filteredItems: studiesFilteredByCategory } = useTagFiltersResults(
    studiesCategoryTagFiltersParams,
  );
  const studiesCategoryTagFilterTags = Object.values(StudyCategories).map(
    (slug) => ({
      slug,
      title: STUDY_CATEGORY_LABELS[slug],
    }),
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
  const studiesStatusTagFilterTags = Object.values(StudyStatuses).map(
    (slug) => ({
      slug,
      title: STUDY_STATUS_LABELS[slug],
    }),
  );

  const { studiesBySectionEntries } = getStudiesList(
    studiesFilteredByCategoryAndStatus,
  );

  return (
    <Stack>
      <TagFilters
        contentType={ContentTypes.Study}
        tagField="meta.category"
        tags={studiesCategoryTagFilterTags}
        collapsible
      />

      <TagFilters
        contentType={ContentTypes.Study}
        tagField="meta.status"
        tags={studiesStatusTagFilterTags}
        collapsible
      />

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
    </Stack>
  );
}
