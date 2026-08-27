import { CommentaryMeta } from "@/framework/client";

import { BookAuthors } from "../../../book";
import { ContentTypeIcon } from "../../../content-type";
import { LinkBoxTitle } from "../../../link-box";
import { Stack, StackDirections } from "../../../stack";
import { Text, TextTypes } from "../../../text";

interface CommentariesListItemSourceProps {
  readonly commentaryMeta: CommentaryMeta;
}

export function CommentariesListItemSource(
  props: CommentariesListItemSourceProps,
) {
  return (
    <Stack direction={StackDirections.Column} gap={0.25}>
      <Stack direction={StackDirections.Row}>
        <Text type={TextTypes.Label}>
          <ContentTypeIcon contentType={props.commentaryMeta.source.type} />{" "}
          {props.commentaryMeta.source.type}
        </Text>
      </Stack>

      <LinkBoxTitle>{props.commentaryMeta.source.title}</LinkBoxTitle>

      <Text type={TextTypes.Label}>
        <BookAuthors authors={props.commentaryMeta.source.authors} />
      </Text>
    </Stack>
  );
}
