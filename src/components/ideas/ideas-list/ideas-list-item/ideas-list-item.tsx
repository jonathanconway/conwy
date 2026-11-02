"use client";

import { Idea as Idea_ } from "@/framework";

import { ContentListItem, ContentListItemBlurb } from "../../../content-list";
import { LinkBox, LinkBoxTitle } from "../../../link-box";

interface IdeasListItemProps {
  readonly idea: Idea_;
}

export function IdeasListItem(props: IdeasListItemProps) {
  const { idea } = props;
  const { meta, blurb } = idea;
  const { slug, title } = meta;

  return (
    <LinkBox href={`/ideas/${slug}`}>
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
