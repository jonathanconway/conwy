import { Checklist, generateChecklistMetaExtensions } from "@/framework";

import { getChecklistMd } from "./checklist-item-page-props-generate.server";

export async function generateChecklistItemPageStaticParams(
  checklists: readonly Checklist[],
) {
  const paramsSets = [];

  for (const checklist of checklists) {
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
