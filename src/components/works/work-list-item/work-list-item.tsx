import { TextTypes } from "@/components/text/text-type";
import { WorkMeta } from "@/framework/client";

import { LinkBox, LinkBoxTitle } from "../../link-box";
import { ListItem, ListItemImage } from "../../list";
import { Text } from "../../text";

interface WorkListItemProps {
  readonly workMeta: WorkMeta;
}

export function WorkListItem(props: WorkListItemProps) {
  const { workMeta } = props;

  const techNames = workMeta.techs.map((tech) => tech.categoryName).join(", ");

  return (
    <LinkBox href={`work/${workMeta.slug}`}>
      <ListItem
        mainSlot={
          <>
            <LinkBoxTitle>{workMeta.client}</LinkBoxTitle>

            <Text type={TextTypes.SubTitle}>{workMeta.jobTitle}</Text>

            <Text type={TextTypes.Body}>{workMeta.blurbShort}</Text>

            <Text type={TextTypes.Small}>Tech: {techNames}</Text>
          </>
        }
        asideSlot={
          <ListItemImage
            src={`/images/works/${props.workMeta.slug}/${props.workMeta.mainImage ?? "thumbnail.png"}`}
            alt={`Work thumbnail image for ${props.workMeta.client}`}
          />
        }
      />
    </LinkBox>
  );
}
