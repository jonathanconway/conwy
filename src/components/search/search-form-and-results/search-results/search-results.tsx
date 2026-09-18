import { Stack } from "../../../stack";
import { SearchStates } from "../use-search-form-and-results.hook";

import { SearchResultsEmpty } from "./search-results-empty";
import { SearchResultsLoaded } from "./search-results-loaded";
import { SearchResultsLoading } from "./search-results-loading";
import { SearchResultsNoResults } from "./search-results-none";
import { SearchResultsProps } from "./search-results-props";

export function SearchResults(props: SearchResultsProps) {
  return (
    <Stack gap={0.5} fill>
      {props.searchState === SearchStates.Empty && <SearchResultsEmpty />}
      {props.searchState === SearchStates.Loading && <SearchResultsLoading />}
      {props.searchState === SearchStates.LoadedNoResults && (
        <SearchResultsNoResults />
      )}
      {props.searchState === SearchStates.LoadedResults && (
        <SearchResultsLoaded searchResults={props.searchResults} />
      )}
    </Stack>
  );
}
