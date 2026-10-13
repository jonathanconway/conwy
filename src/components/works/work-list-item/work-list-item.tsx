import { WorkMeta } from "@/framework";

import { ContentListItem, ContentListItemImage } from "../../content-list";
import { LinkBox, LinkBoxTitle } from "../../link-box";
import { Stack } from "../../stack";
import { Text } from "../../text";
import { TextTypes } from "../../text/text-type";

interface WorkListItemProps {
  readonly workMeta: WorkMeta;
}

export function WorkListItem(props: WorkListItemProps) {
  const {
    workMeta: { techs, slug, client, jobTitle, blurbShort, mainImage },
  } = props;

  const techNames = techs.map((tech) => tech.categoryName).join(", ");

  return (
    <LinkBox href={`work/${slug}`}>
      <ContentListItem
        mainSlot={
          <>
            <LinkBoxTitle>{client}</LinkBoxTitle>

            <Text type={TextTypes.ListItemSubTitle}>{jobTitle}</Text>

            <Stack gap={0.5}>
              <Text type={TextTypes.Summary}>{blurbShort}</Text>

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
