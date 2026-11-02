import { readFileSync } from "fs";

import * as checklistsMap from "@/content/checklists";
import {
  Checklist as Checklist_,
  ContentTypes,
  NextPageProps,
  generateChecklistMetaExtensions,
} from "@/framework";
import { findImportedContent } from "@/framework/server";

function getChecklistMd(slug: string) {
  const checklistMdFilePathName = `${process.cwd()}/src/content/checklists/${slug}/content.mdx`;
  const checklistMd = readFileSync(checklistMdFilePathName).toString();

  return checklistMd;
}

export async function generateChecklistPageProps(props: NextPageProps) {
  const params = await props.params;

  const checklist = findImportedContent(
    checklistsMap,
    ContentTypes.Checklist,
    params.slug,
  );

  const checklistMd = getChecklistMd(checklist.meta.slug);

  const extensions = await generateChecklistMetaExtensions(
    checklist.meta,
    checklistMd,
  );

  const checklistWithMetaExtensions: Checklist_ = {
    ...checklist,
    meta: {
      ...checklist.meta,
      extensions,
    },
  };

  return {
    checklist: checklistWithMetaExtensions,
  };
}
