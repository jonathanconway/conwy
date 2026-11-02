import { Metadata } from "next";
import { Suspense } from "react";

import { ChecklistPage } from "@/components";
import { site } from "@/content";
import * as checklistsMap from "@/content/checklists";
import { ContentTypes, NextPageProps } from "@/framework";
import { findImportedContent } from "@/framework/server";
import { generateChecklistPageProps } from "@/utils";

const checklists = Object.values(checklistsMap);

export default async function Page(props: NextPageProps) {
  const { checklist } = await generateChecklistPageProps(props);

  return (
    <Suspense>
      <ChecklistPage checklist={checklist} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  return checklists.map((item) => item.meta);
}

export async function generateMetadata(
  props: NextPageProps,
): Promise<Metadata> {
  const params = await props.params;

  const checklist = findImportedContent(
    checklistsMap,
    ContentTypes.Checklist,
    params.slug,
  );
  const checklistTitle = checklist.meta.title.toLowerCase();

  const title = `${site.title} - checklists - ${checklistTitle}`;

  return {
    title,
  };
}
