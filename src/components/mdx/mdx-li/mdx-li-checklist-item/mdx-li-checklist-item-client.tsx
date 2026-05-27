"use client";

import { intersection } from "lodash";

import { ChecklistItem } from "../../../checklist";
import { useMdxDivCustomChecklistContext } from "../../mdx-div";

import { MdxLiChecklistItemClientProps } from "./mdx-li-checklist-item-client-props";

export function MdxLiChecklistItemClient(props: MdxLiChecklistItemClientProps) {
  const { sectionItem } = props;

  const mdxDivCustomChecklistContext = useMdxDivCustomChecklistContext();

  if (mdxDivCustomChecklistContext) {
    const filteredTagNames = mdxDivCustomChecklistContext?.selectedFilters.map(
      (tag) => tag.name,
    );
    if (filteredTagNames.length > 0) {
      const sectionItemTagNames = sectionItem.tags.map((tag) => tag.tag);
      if (intersection(filteredTagNames, sectionItemTagNames).length === 0) {
        return;
      }
    }
  }

  return <ChecklistItem item={sectionItem} />;
}
