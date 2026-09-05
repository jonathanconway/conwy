import { readFileSync } from "fs";
import { Metadata } from "next";
import { Suspense } from "react";

import { ChecklistItemPage, Redirect } from "@/components";
import { site } from "@/content";
import * as checklists from "@/content/checklists";
import {
  Checklist as Checklist_,
  generateChecklistMetaExtensions,
  importContentBySlug,
} from "@/framework/client";

import { PageProps } from "../../../[slug]/types";

type ChecklistItemPageProps = PageProps<{
  readonly slug: string;
  readonly itemslug: string;
}>;

function getChecklistMd(slug: string) {
  const checklistMdFilePathName = `${process.cwd()}/src/content/checklists/${slug}/content.mdx`;
  const checklistMd = readFileSync(checklistMdFilePathName).toString();

  return checklistMd;
}

export default async function Page(props: ChecklistItemPageProps) {
  const { slug, itemslug } = await props.params;

  const checklistBase = importContentBySlug<Checklist_>(
    checklists,
    "checklist",
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

  const item = checklistMetaExtensions?.itemsByName[itemslug];

  if (!item) {
    return <Redirect redirectUrl={`/checklists/${slug}`} />;
  }

  return (
    <Suspense>
      <ChecklistItemPage checklist={checklist} checklistItem={item} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  const paramsSets = [];

  for (const checklist of Object.values(checklists)) {
    const checklistMd = getChecklistMd(checklist.meta.slug);

    const extensions = await generateChecklistMetaExtensions(
      checklist.meta,
      checklistMd,
    );

    const {
      meta: { slug },
    } = checklist;

    const itemSlugs = extensions?.items.map((item) => item.name) ?? [];

    for (const itemslug of itemSlugs) {
      paramsSets.push({
        slug,
        itemslug,
      });
    }
  }

  return paramsSets;
}

export async function generateMetadata(
  props: ChecklistItemPageProps,
): Promise<Metadata> {
  const { slug, itemslug } = await props.params;
  const checklist = importContentBySlug<Checklist_>(
    checklists,
    "checklist",
    slug,
  );

  const checklistMd = getChecklistMd(checklist.meta.slug);
  const extensions = await generateChecklistMetaExtensions(
    checklist.meta,
    checklistMd,
  );
  const item = extensions?.itemsByName[itemslug];

  const checklistTitle = checklist.meta.title.toLowerCase();
  const checklistItemTitle = item?.title ?? "";

  return {
    title: `${site.title} - checklists - ${checklistTitle} - ${checklistItemTitle}`,
  };
}
