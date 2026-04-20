import { Metadata } from "next";

import { buildChecklists } from "@/builders";
import { ChecklistPage } from "@/components";
import { site } from "@/content";
import * as checklists from "@/content/checklists";
import {
  Checklist as Checklist_,
  importContentBySlug,
} from "@/framework/client";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const checklist = importContentBySlug<Checklist_>(
    checklists,
    "checklist",
    params.slug,
  );

  return <ChecklistPage checklist={checklist} />;
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

  buildChecklists([checklist.meta]);

  const checklistTitle = checklist.meta.title.toLowerCase();
  return {
    title: `${site.title} - checklists - ${checklistTitle}`,
  };
}
