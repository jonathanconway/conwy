"use client";

import { Idea as Idea_ } from "@/framework/client";

import { LinkBox, LinkBoxTitle } from "../../../link-box";
import { MdxWrapper } from "../../../mdx";
import { Stack, StackDirections } from "../../../stack";

import * as styles from "./ideas-list-item.css";

interface IdeasListItemProps {
  readonly idea: Idea_;
}

export function IdeasListItem({ idea }: IdeasListItemProps) {
  return (
    <li key={idea.meta.slug} className={styles.ideasListItem}>
      <LinkBox href={`/ideas/${idea.meta.slug}`}>
        <Stack direction={StackDirections.Column} gap={0.5}>
          <LinkBoxTitle>{idea.meta.title}</LinkBoxTitle>

          <MdxWrapper>{idea.blurb}</MdxWrapper>
        </Stack>
      </LinkBox>
    </li>
  );
}
