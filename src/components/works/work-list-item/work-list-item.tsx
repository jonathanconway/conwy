import { WorkMeta } from "@/framework/client";

import { ContentListItem, ContentListItemImage } from "../../content-list";
import { LinkBox, LinkBoxTitle } from "../../link-box";
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

            <Text type={TextTypes.Body}>{workMeta.blurbShort}</Text>

            <Text type={TextTypes.Small}>Tech: {techNames}</Text>
          </>
        }
        asideSlot={
          <ContentListItemImage
            src={`/images/works/${props.workMeta.slug}/${props.workMeta.mainImage ?? "thumbnail.png"}`}
            alt={`Work thumbnail image for ${props.workMeta.client}`}
          />
        }
      />
    </LinkBox>
  );
}
