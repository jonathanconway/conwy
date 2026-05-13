import { readFileSync } from "fs";
import { Metadata } from "next";
import { Suspense } from "react";

import { ChecklistPage } from "@/components";
import { site } from "@/content";
import * as checklists from "@/content/checklists";
import {
  Checklist as Checklist_,
  generateChecklistMetaExtensions,
  importContentBySlug,
} from "@/framework/client";

import { PageProps } from "../../[slug]/types";

function getChecklistMd(slug: string) {
  const checklistMdFilePathName = `${process.cwd()}/src/content/checklists/${slug}/content.mdx`;
  const checklistMd = readFileSync(checklistMdFilePathName).toString();

  return checklistMd;
}

export default async function Page(props: PageProps) {
  const params = await props.params;

  const checklist = importContentBySlug<Checklist_>(
    checklists,
    "checklist",
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

  return (
    <Suspense>
      <ChecklistPage checklist={checklistWithMetaExtensions} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  const allChecklistMetas = Object.values(checklists).map((item) => item.meta);
  return allChecklistMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const checklist = importContentBySlug<Checklist_>(
    checklists,
    "checklist",
    params.slug,
  );

  const checklistTitle = checklist.meta.title.toLowerCase();
  return {
    title: `${site.title} - checklists - ${checklistTitle}`,
  };
}
