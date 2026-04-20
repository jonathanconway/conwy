import { camelCase } from "lodash";

import * as checklistsMap from "@/content/checklists";
import { ContentTypes } from "@/framework/client";

import { ContentEmbedChecklist } from "./content-embed-checklist";
import { ContentEmbedProps } from "./content-embed-props";

export function ContentEmbed(props: ContentEmbedProps) {
  const contentItemSlugAndType = `${props.slug}-${props.type}`;
  const contentItemCodeName = camelCase(contentItemSlugAndType);

  switch (props.type) {
    case ContentTypes.Checklist:
      const contentItem =
        checklistsMap[contentItemCodeName as keyof typeof checklistsMap];
      return (
        <ContentEmbedChecklist checklist={contentItem}>
          {contentItem.content}
        </ContentEmbedChecklist>
      );
    default:
      // todo: implement embed for all other content types
      return null;
  }
}
