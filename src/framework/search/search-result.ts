import { Markdown } from "../content/markdown";

import { SearchRecord } from "./search-record";

/**
 * An item of content returned as a result of a search query.
 */
export interface SearchResult {
  readonly searchRecord: SearchRecord;
  readonly excerpt: Markdown;
}
