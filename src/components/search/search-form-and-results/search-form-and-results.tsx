import { Stack, StackDirections } from "../../stack";

import { SearchForm } from "./search-form";
import { SearchResults } from "./search-results";
import { useSearchFormAndResults } from "./use-search-form-and-results.hook";

export function SearchFormAndResults() {
  const {
    setSearchText,
    searchResults,
    isSearchTextEmpty,
    isSearchResultsLoading,
  } = useSearchFormAndResults();

  return (
    <Stack direction={StackDirections.Column} gap={1}>
      <SearchForm onChangeSearchText={setSearchText} />
      <SearchResults
        isEmpty={isSearchTextEmpty}
        isLoading={isSearchResultsLoading}
        searchResults={searchResults}
      />
    </Stack>
  );
}
