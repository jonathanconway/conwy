import { SearchResult } from "@/framework";

import { SearchState } from "../use-search-form-and-results.hook";

export interface SearchResultsProps {
  readonly searchState: SearchState;
  readonly searchResults: readonly SearchResult[];
}
