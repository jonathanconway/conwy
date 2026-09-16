import { ContentList, ContentListSmall } from "../../../content-list";
import { Stack, StackDirections } from "../../../stack";
import { Text, TextTypes } from "../../../text";

import { SearchResultsEmpty } from "./search-results-empty";
import { SearchResultsItem } from "./search-results-item";
import { SearchResultsLoading } from "./search-results-loading";
import { SearchResultsProps } from "./search-results-props";
import * as styles from "./search-results.css";

export function SearchResults(props: SearchResultsProps) {
  return (
    <Stack gap={0.5} fill>
      {!props.isLoading &&
        props.isEmpty &&
        props.searchResults.length === 0 && (
          <div className={styles.resultsInnerContainer}>
            <SearchResultsEmpty />
          </div>
        )}

      {props.isLoading && (
        <div className={styles.resultsInnerContainer}>
          <SearchResultsLoading />
        </div>
      )}

      {!props.isLoading && !props.isEmpty && props.searchResults.length > 0 && (
        <Stack direction={StackDirections.Column} gap={0.5}>
          <Text type={TextTypes.Label}>
            Results ({props.searchResults.length})
          </Text>

          <div className={styles.resultsItems}>
            {props.searchResults.map((searchResult) => (
              <SearchResultsItem
                key={`${searchResult.searchRecord.contentType}-${searchResult.searchRecord.contentSlug}`}
                searchResult={searchResult}
              />
            ))}
          </div>
        </Stack>
      )}
    </Stack>
  );
}
