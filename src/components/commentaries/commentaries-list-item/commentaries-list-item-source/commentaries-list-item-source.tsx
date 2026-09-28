import { Commentary, ContentLinkInfo } from "@/framework/client";

import { BookAuthors } from "../../../book";
import { ContentTypeIcon } from "../../../content-type";
import { LinkBoxTitle } from "../../../link-box";
import { Stack, StackDirections } from "../../../stack";
import { Text, TextTypes } from "../../../text";

interface CommentariesListItemSourceProps {
  readonly commentary: Commentary;
  readonly sourceLinkInfo: ContentLinkInfo;
}

export function CommentariesListItemSource(
  props: CommentariesListItemSourceProps,
) {
  const {
    commentary: {
      meta: {
        source: { type },
      },
    },
    sourceLinkInfo: { title: sourceTitle, authors: sourceAuthors },
  } = props;

  return (
    <Stack direction={StackDirections.Column} gap={0.25}>
      <Stack direction={StackDirections.Row}>
        <Text type={TextTypes.Label}>
          <ContentTypeIcon contentType={type} /> {type}
        </Text>
      </Stack>
      <LinkBoxTitle>{sourceTitle}</LinkBoxTitle>
      {sourceAuthors && (
        <Text type={TextTypes.Label}>
          <BookAuthors authors={sourceAuthors} />
        </Text>
      )}
    </Stack>
  );
}
