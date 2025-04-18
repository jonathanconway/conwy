import { NoteMeta } from "@/framework/client";

import { BookAuthors } from "../../book";
import { ContentTypeIcon } from "../../content-type";
import { Heading } from "../../heading";
import { Stack } from "../../stack";
import { Text, TextTypes } from "../../text";

interface NoteSourceProps {
  readonly noteMeta: NoteMeta;
}

export function NoteSource(props: NoteSourceProps) {
  return (
    <Stack direction="column" gap={0.25}>
      <Stack direction="row">
        <Text type={TextTypes.Label}>
          <ContentTypeIcon contentType={props.noteMeta.source.type} />{" "}
          {props.noteMeta.source.type}
        </Text>
      </Stack>

      <Heading level={2}>
        {props.noteMeta.title ?? props.noteMeta.source.title}
      </Heading>

      <Text>
        <BookAuthors authors={props.noteMeta.source.authors} />
      </Text>
    </Stack>
  );
}
