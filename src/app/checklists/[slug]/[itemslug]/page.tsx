import { Metadata } from "next";
import { Suspense } from "react";

import { ChecklistItemPage, Redirect } from "@/components";
import { site } from "@/content";
import * as checklistsMap from "@/content/checklists";
import {
  ContentTypes,
  NextPageProps,
  generateChecklistMetaExtensions,
} from "@/framework";
import { findImportedContent } from "@/framework/server";
import {
  generateChecklistItemPageProps,
  generateChecklistItemPageStaticParams,
  getChecklistMd,
} from "@/utils";

const checklists = Object.values(checklistsMap);

interface ChecklistItemPagePropsParams {
  readonly slug: string;
  readonly itemslug: string;
}

type ChecklistItemPageProps = NextPageProps<ChecklistItemPagePropsParams>;

export default async function Page(props: ChecklistItemPageProps) {
  const checklistItemPageProps = await generateChecklistItemPageProps(
    checklistsMap,
    props,
  );

  if (!checklistItemPageProps) {
    const params = await props.params;
    const { slug } = params;
    return <Redirect redirectUrl={`/checklists/${slug}`} />;
  }

  const { checklist, checklistItem } = checklistItemPageProps;

  return (
    <Suspense>
      <ChecklistItemPage checklist={checklist} checklistItem={checklistItem} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  return generateChecklistItemPageStaticParams(checklists);
}

export async function generateMetadata(
  props: ChecklistItemPageProps,
): Promise<Metadata> {
  const params = await props.params;
  const { itemslug } = params;
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
  const item = extensions?.itemsByName[itemslug];

  const checklistTitle = checklist.meta.title.toLowerCase();
  const checklistItemTitle = (item?.title ?? "").toLowerCase();

  const title = `${site.title} - checklists - ${checklistTitle} - ${checklistItemTitle}`;

  return {
    title,
  };
}
