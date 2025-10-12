"use client";

import { Idea as Idea_ } from "@/framework/client";

import { Fragment } from "../../../fragments";
import { LinkBox, LinkBoxTitle } from "../../../link-box";
import { Stack, StackDirections } from "../../../stack";

import * as styles from "./ideas-list-item.css";

interface IdeasListItemProps {
  readonly idea: Idea_;
}

export function IdeasListItem({ idea }: IdeasListItemProps) {
  return (
    <li key={idea.slug} className={styles.ideasListItem}>
      <LinkBox href={`/ideas/${idea.slug}`}>
        <Stack direction={StackDirections.Column} gap={0.5}>
          <LinkBoxTitle>{idea.meta.title}</LinkBoxTitle>
          <Fragment>{idea.blurb}</Fragment>
        </Stack>
      </LinkBox>
    </li>
  );
}
