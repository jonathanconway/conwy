import { LinkBox, LinkBoxTitle, LinkBoxTitleSizes } from "../../../../link-box";
import { Stack } from "../../../../stack";
import { Text, TextTypes } from "../../../../text";

import { SearchResultsItemProps } from "./search-results-item-props";
import * as styles from "./search-results-item.css";

export function SearchResultsItem(props: SearchResultsItemProps) {
  const {
    searchResult: {
      searchRecord: { contentUrl, contentType, title },
      excerpt,
    },
  } = props;

  return (
    <LinkBox href={contentUrl}>
      <Stack gap={0.25} fill>
        <Text type={TextTypes.Label}>{contentType}</Text>
        <LinkBoxTitle size={LinkBoxTitleSizes.Small}>{title}</LinkBoxTitle>
        <div
          className={styles.excerpt}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </Stack>
    </LinkBox>
  );
}
