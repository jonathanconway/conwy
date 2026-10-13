import { ProjectMeta } from "@/framework/client";

import {
  ContentListItem,
  ContentListItemImage,
  ContentListItemType,
} from "../../../content-list";
import { LinkBox, LinkBoxTitle } from "../../../link-box";
import { SocialLinksIcons } from "../../../social-links";
import { Text, TextTypes } from "../../../text";

interface ProjectsListItemProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectsListItem(props: ProjectsListItemProps) {
  const { projectMeta } = props;

  return (
    <LinkBox href={`projects/${projectMeta.slug}`}>
      <ContentListItem
        mainSlot={
          <>
            <LinkBoxTitle>{projectMeta.title}</LinkBoxTitle>

            <Text type={TextTypes.Summary}>{projectMeta.blurb}</Text>
          </>
        }
        asideSlot={
          <>
            {projectMeta?.mainImage && (
              <ContentListItemImage
                src={projectMeta.mainImage.src}
                alt="Project main image"
              />
            )}

            {projectMeta.socialLinks && (
              <SocialLinksIcons socialLinks={projectMeta.socialLinks} />
            )}

            <ContentListItemType>{projectMeta.subType}</ContentListItemType>
          </>
        }
      />
    </LinkBox>
  );
}
