import { POST_MAIN_IMAGE_DEFAULT, ProjectMeta } from "@/framework/client";

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
            <div>
              <LinkBoxTitle>{projectMeta.title}</LinkBoxTitle>

              <Text type={TextTypes.Summary}>{projectMeta.blurb}</Text>
            </div>
          </>
        }
        asideSlot={
          <>
            <ContentListItemImage
              src={`/images/projects/${projectMeta.slug}/${projectMeta.mainImage ?? POST_MAIN_IMAGE_DEFAULT}`}
              alt="Project main image"
            />

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
