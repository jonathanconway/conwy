import { readFileSync } from "fs";

import {
  Checklist,
  ContentMap,
  ContentTypes,
  generateChecklistMetaExtensions,
} from "@/framework";
import { findImportedContent } from "@/framework/server";

import { ChecklistItemPageProps } from "./checklist-item-page-props";

export async function generateChecklistItemPageProps(
  checklistsMap: ContentMap<Checklist>,
  props: ChecklistItemPageProps,
) {
  const params = await props.params;
  const { slug, itemslug } = params;
  const checklistBase = findImportedContent(
    checklistsMap,
    ContentTypes.Checklist,
    slug,
  );

  const checklistMd = getChecklistMd(checklistBase.meta.slug);

  const checklistMetaExtensions = await generateChecklistMetaExtensions(
    checklistBase.meta,
    checklistMd,
  );

  const checklist = {
    ...checklistBase,
    meta: {
      ...checklistBase.meta,
      extensions: checklistMetaExtensions,
    },
  };

  const checklistItem = checklistMetaExtensions?.itemsByName[itemslug];
  if (!checklistItem) {
    return;
  }

  return {
    checklist,
    checklistItem,
  };
}

export function getChecklistMd(slug: string) {
  const checklistMdFilePathName = `${process.cwd()}/src/content/checklists/${slug}/content.mdx`;
  const checklistMd = readFileSync(checklistMdFilePathName).toString();

  return checklistMd;
}
