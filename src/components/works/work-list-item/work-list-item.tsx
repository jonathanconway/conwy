import { Work } from "@/framework";

import { ContentListItem, ContentListItemImage } from "../../content-list";
import { Divider } from "../../divider";
import { LinkBox, LinkBoxTitle } from "../../link-box";
import { Stack } from "../../stack";
import { Text, TextSpacingStrategies } from "../../text";
import { TextTypes } from "../../text/text-type";

interface WorkListItemProps {
  readonly work: Work;
}

export function WorkListItem(props: WorkListItemProps) {
  const {
    work: { meta },
  } = props;
  const { techs, slug, client, jobTitle, blurbShort, mainImage } = meta;

  const techNames = techs.map((tech) => tech.categoryName).join(", ");

  return (
    <LinkBox href={`work/${slug}`}>
      <ContentListItem
        mainSlot={
          <>
            <LinkBoxTitle>{client}</LinkBoxTitle>

            <Text type={TextTypes.ListItemSubTitle}>{jobTitle}</Text>

            <Stack gap={0.5}>
              <Text
                type={TextTypes.Blurb}
                spacingStrategy={TextSpacingStrategies.Exclude}
              >
                {blurbShort}
              </Text>

              <Divider />

              <Text type={TextTypes.Small}>Tech: {techNames}</Text>
            </Stack>
          </>
        }
        asideSlot={
          mainImage ? (
            <ContentListItemImage
              src={mainImage.src}
              alt={`Work thumbnail image for ${client}`}
            />
          ) : null
        }
      />
    </LinkBox>
  );
}
