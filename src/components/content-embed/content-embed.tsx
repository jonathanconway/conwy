import { camelCase } from "lodash";

import { ContentEmbedProps } from "./content-embed-props";

export function ContentEmbed(props: ContentEmbedProps) {
  const contentItemSlugAndType = `${props.slug}-${props.type}`;
  const contentItemCodeName = camelCase(contentItemSlugAndType);

  switch (props.type) {
    // case ContentTypes.Checklist:
    //   const contentItem =
    //     checklistsMap[contentItemCodeName as keyof typeof checklistsMap];
    //   return (
    //     <ContentEmbedChecklist checklist={contentItem}>
    //       {contentItem.content}
    //     </ContentEmbedChecklist>
    //   );
    default:
      // todo: implement embed for all other content types
      return null;
  }
}
