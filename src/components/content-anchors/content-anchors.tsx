import { ContentAny, getAnchors } from "@/framework/client";

import contentAnchors from "../../../builder-out/content-anchors.json";
import { Divider } from "../divider";
import { Stack } from "../stack";
import { Text, TextTypes } from "../text";

import { ContentAnchor } from "./content-anchor";

interface ContentAnchorsProps {
  readonly content: ContentAny;
}

export function ContentAnchors(props: ContentAnchorsProps) {
  const { content } = props;
  const anchors = getAnchors(contentAnchors, content);

  if (anchors.length === 0) {
    return;
  }

  return (
    <>
      <Divider />

      <Stack gap={0.125}>
        <Text type={TextTypes.Small}>Referenced in:</Text>

        {anchors.map((anchor) => (
          <div key={anchor.containingContentSlug}>
            <ContentAnchor content={content} anchor={anchor} />
          </div>
        ))}
      </Stack>
    </>
  );
}
