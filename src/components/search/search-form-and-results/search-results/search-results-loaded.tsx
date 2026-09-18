import { SearchResult } from "@/framework/client";

import { Stack, StackDirections } from "../../../stack";
import { Text, TextTypes } from "../../../text";

import { SearchResultsItem } from "./search-results-item";
import * as styles from "./search-results.css";

interface SearchResultsLoadedProps {
  readonly searchResults: readonly SearchResult[];
}

export function SearchResultsLoaded(props: SearchResultsLoadedProps) {
  return (
    <Stack direction={StackDirections.Column} gap={0.5} fill>
      <div className={styles.resultsContainerLabel}>
        <Text type={TextTypes.Label}>
          Results ({props.searchResults.length})
        </Text>
      </div>
      <div className={styles.resultsContainerWithLabel}>
        <div className={styles.resultsInnerContainer}>
          {props.searchResults.map((searchResult) => (
            <SearchResultsItem
              key={`${searchResult.searchRecord.contentType}-${searchResult.searchRecord.contentSlug}`}
              searchResult={searchResult}
            />
          ))}
        </div>
      </div>
    </Stack>
  );
}
