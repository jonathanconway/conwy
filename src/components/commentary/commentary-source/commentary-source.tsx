import { ContentLink, ContentLinkInfo } from "@/framework/client";

import { BookAuthors } from "../../book";
import { ContentTypeIcon } from "../../content-type";
import { Heading } from "../../heading";
import { Stack, StackDirections, StackDistributions } from "../../stack";
import { Text, TextTypes } from "../../text";

interface CommentarySourceProps {
  readonly sourceLink: ContentLink;
  readonly sourceLinkInfo: ContentLinkInfo;
}

export function CommentarySource(props: CommentarySourceProps) {
  const {
    sourceLink,
    sourceLinkInfo: { title, authors },
  } = props;
  return (
    <Stack direction={StackDirections.Column} gap={0.25}>
      <Heading level={2}>{title}</Heading>

      <Stack
        direction={StackDirections.Row}
        distribution={StackDistributions.Flow}
        gap={0.5}
      >
        <Text type={TextTypes.Label}>
          <ContentTypeIcon contentType={sourceLink.type} />{" "}
          <>{sourceLink.type}</>
          {authors && (
            <>
              {" "}
              by <BookAuthors authors={authors} />
            </>
          )}
        </Text>
      </Stack>
    </Stack>
  );
}
