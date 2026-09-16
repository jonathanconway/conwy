import { SearchResult } from "@/framework/client";

export interface SearchResultsProps {
  readonly isEmpty: boolean;
  readonly isLoading: boolean;
  readonly searchResults: readonly SearchResult[];
}
