import { ContentAnchorLinkAndInfo } from "@/framework/client";

import { Divider } from "../divider";
import { Stack } from "../stack";
import { Text, TextTypes } from "../text";

import { ContentAnchor } from "./content-anchor";

interface ContentAnchorsProps {
  readonly contentAnchorLinkAndInfos: readonly ContentAnchorLinkAndInfo[];
}

export function ContentAnchors(props: ContentAnchorsProps) {
  const { contentAnchorLinkAndInfos } = props;

  if (contentAnchorLinkAndInfos.length === 0) {
    return;
  }

  const contentLinkAndInfosBySlug = Object.fromEntries(
    contentAnchorLinkAndInfos.map((contentLinkAndInfo) => [
      contentLinkAndInfo.slug,
      contentLinkAndInfo,
    ]),
  );

  return (
    <>
      <Divider />

      <Stack gap={0.125}>
        <Text type={TextTypes.Small}>Referenced in:</Text>

        {contentAnchorLinkAndInfos.map((contentAnchorLinkAndInfo) => (
          <ContentAnchor
            key={contentAnchorLinkAndInfo.containingContentLink.slug}
            anchor={contentAnchorLinkAndInfo}
            anchorContentLinkInfo={
              contentLinkAndInfosBySlug[
                contentAnchorLinkAndInfo.containingContentLink.slug
              ]
            }
          />
        ))}
      </Stack>
    </>
  );
}
