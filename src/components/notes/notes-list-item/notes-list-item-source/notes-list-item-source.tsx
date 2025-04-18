import { NoteMeta } from "@/framework/client";

import { BookAuthors } from "../../../book";
import { ContentTypeIcon } from "../../../content-type";
import { LinkBoxTitle } from "../../../link-box";
import { Stack } from "../../../stack";
import { Text, TextTypes } from "../../../text";

interface NotesListItemSourceProps {
  readonly noteMeta: NoteMeta;
}

export function NotesListItemSource(props: NotesListItemSourceProps) {
  return (
    <Stack direction="column" gap={0.25}>
      <Stack direction="row">
        <Text type={TextTypes.Label}>
          <ContentTypeIcon contentType={props.noteMeta.source.type} />{" "}
          {props.noteMeta.source.type}
        </Text>
      </Stack>

      <LinkBoxTitle>
        {props.noteMeta.title ?? props.noteMeta.source.title}
      </LinkBoxTitle>

      <Text>
        <BookAuthors authors={props.noteMeta.source.authors} />
      </Text>
    </Stack>
  );
}
