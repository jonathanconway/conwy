import { StackDistributions } from "@/components/stack/stack-distribution";
import { CommentaryMeta } from "@/framework/client";

import { BookAuthors } from "../../book";
import { ContentTypeIcon } from "../../content-type";
import { Heading } from "../../heading";
import { Stack, StackDirections } from "../../stack";
import { Text, TextTypes } from "../../text";

interface CommentarySourceProps {
  readonly commentaryMeta: CommentaryMeta;
}

export function CommentarySource(props: CommentarySourceProps) {
  return (
    <Stack direction={StackDirections.Column} gap={0.25}>
      <Heading level={2}>{props.commentaryMeta.source.title}</Heading>

      <Stack
        direction={StackDirections.Row}
        distribution={StackDistributions.Flow}
        gap={0.5}
      >
        <Text type={TextTypes.Label}>
          <ContentTypeIcon contentType={props.commentaryMeta.source.type} />{" "}
          {props.commentaryMeta.source.type} by{" "}
          <BookAuthors authors={props.commentaryMeta.source.authors} />
        </Text>
      </Stack>
    </Stack>
  );
}
