import { POST_MAIN_IMAGE_DEFAULT, ProjectMeta } from "@/framework/client";

import { LinkBox, LinkBoxTitle } from "../../../link-box";
import { ListItem, ListItemImage, ListItemType } from "../../../list";
import { SocialLinksIcons } from "../../../social-links";
import { Text, TextTypes } from "../../../text";

interface ProjectsListItemProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectsListItem(props: ProjectsListItemProps) {
  const { projectMeta } = props;

  return (
    <LinkBox href={`projects/${projectMeta.slug}`}>
      <ListItem
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
            <ListItemImage
              src={`/images/projects/${projectMeta.slug}/${projectMeta.mainImage ?? POST_MAIN_IMAGE_DEFAULT}`}
              alt="Project main image"
            />

            {projectMeta.socialLinks && (
              <SocialLinksIcons socialLinks={projectMeta.socialLinks} />
            )}

            <ListItemType>{projectMeta.subType}</ListItemType>
          </>
        }
      />
    </LinkBox>
  );
}
