import { createSearchRecordMock } from "@/framework/client";

import { SearchResultsItemProps } from "./search-results-item-props";

export function createSearchResultsItemPropsMock(): SearchResultsItemProps {
  return {
    searchResult: {
      searchRecord: createSearchRecordMock(),
      excerpt:
        "foo bar baz <mark>one</mark> two three <br />four five [six](https://seven) eight <p>nine</p> ten",
    },
  };
}
