"use client";

import { CHECKLIST_TAG_TITLES, ChecklistTags, ContentTypes } from "@/framework";

import { TagFilters } from "../../filters";

export function ChecklistsTagFilters() {
  const checklistTagFilterTags = Object.values(ChecklistTags).map((slug) => ({
    slug,
    title: CHECKLIST_TAG_TITLES[slug],
  }));

  return (
    <TagFilters
      contentType={ContentTypes.Checklist}
      tags={checklistTagFilterTags}
      tagField="meta.checklistTags"
    />
  );
}
