import { Project } from "@/framework";

import {
  ContentListItem,
  ContentListItemImage,
  ContentListItemType,
} from "../../../content-list";
import { Divider } from "../../../divider";
import { LinkBox, LinkBoxTitle } from "../../../link-box";
import { SocialLinksIcons } from "../../../social-links";
import { Stack } from "../../../stack";
import { Text, TextSpacingStrategies, TextTypes } from "../../../text";

interface ProjectsListItemProps {
  readonly project: Project;
}

export function ProjectsListItem(props: ProjectsListItemProps) {
  const { project } = props;
  const {
    meta: { title, slug, blurb, mainImage, socialLinks, subType, techs },
  } = project;

  const techNames = techs.map((tech) => tech.categoryName).join(", ");

  return (
    <LinkBox href={`projects/${slug}`}>
      <ContentListItem
        mainSlot={
          <>
            <LinkBoxTitle>{title}</LinkBoxTitle>

            <Stack gap={0.5}>
              <Text
                type={TextTypes.Paragraph}
                spacingStrategy={TextSpacingStrategies.Exclude}
                as="div"
              >
                {blurb}
              </Text>

              <Divider />

              <Text type={TextTypes.Small}>Tech: {techNames}</Text>
            </Stack>
          </>
        }
        asideSlot={
          <>
            {mainImage && (
              <ContentListItemImage
                src={mainImage.src}
                alt="Project main image"
              />
            )}

            {socialLinks && <SocialLinksIcons socialLinks={socialLinks} />}

            <ContentListItemType>{subType}</ContentListItemType>
          </>
        }
      />
    </LinkBox>
  );
}
