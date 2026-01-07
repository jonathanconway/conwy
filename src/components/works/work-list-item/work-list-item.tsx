import { WorkMeta } from "@/framework/client";

import { ContentListItem, ContentListItemImage } from "../../content-list";
import { LinkBox, LinkBoxTitle } from "../../link-box";
import { Stack } from "../../stack";
import { Text } from "../../text";
import { TextTypes } from "../../text/text-type";

interface WorkListItemProps {
  readonly workMeta: WorkMeta;
}

export function WorkListItem(props: WorkListItemProps) {
  const { workMeta } = props;

  const techNames = workMeta.techs.map((tech) => tech.categoryName).join(", ");

  return (
    <LinkBox href={`work/${workMeta.slug}`}>
      <ContentListItem
        mainSlot={
          <>
            <LinkBoxTitle>{workMeta.client}</LinkBoxTitle>

            <Text type={TextTypes.SubTitle}>{workMeta.jobTitle}</Text>

            <Stack gap={0.5}>
              <Text type={TextTypes.Summary}>{workMeta.blurbShort}</Text>

              <Text type={TextTypes.Small}>Tech: {techNames}</Text>
            </Stack>
          </>
        }
        asideSlot={
          props.workMeta.mainImage ? (
            <ContentListItemImage
              src={props.workMeta.mainImage.src}
              alt={`Work thumbnail image for ${props.workMeta.client}`}
            />
          ) : null
        }
      />
    </LinkBox>
  );
}
