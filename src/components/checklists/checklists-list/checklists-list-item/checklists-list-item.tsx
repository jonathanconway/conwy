import { ChecklistMeta } from "@/framework/client";

import { ContentListItem, ContentListItemBlurb } from "../../../content-list";
import { LinkBox, LinkBoxTitle } from "../../../link-box";

export type ChecklistsListItemProps = ChecklistMeta;

export function ChecklistsListItem(props: ChecklistsListItemProps) {
  const { slug, title, blurb } = props;

  return (
    <LinkBox href={`checklists/${slug}`}>
      <ContentListItem
        mainSlot={
          <>
            <LinkBoxTitle>{title}</LinkBoxTitle>

            <ContentListItemBlurb>{blurb}</ContentListItemBlurb>
          </>
        }
      />
    </LinkBox>
  );
}
