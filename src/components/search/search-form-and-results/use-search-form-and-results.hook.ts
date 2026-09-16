import { max, trim, unescape } from "lodash";
import { marked } from "marked";
import { useEffect, useState } from "react";

import { SearchResult } from "@/framework/client";

interface SearchFormAndResultsState {
  readonly searchText: string;
  readonly searchResults: readonly SearchResult[];
  readonly isSearchResultsLoading: boolean;
}

function usePageFind() {
  const [pageFind, setPageFind] = useState<any>(null);
  useEffect(() => {
    async function importPageFind() {
      const newPageFind = await import(
        /* webpackIgnore: true */ "/pagefind/pagefind.js" as any
      );
      setPageFind(newPageFind);
    }

    importPageFind();
  }, []);

  return pageFind;
}

export function useSearchFormAndResults() {
  const [state, setState] = useState<SearchFormAndResultsState>({
    searchText: "",
    searchResults: [],
    isSearchResultsLoading: false,
  });
  const { searchText } = state;
  const searchTextTrimmed = searchText.trim();
  const isSearchTextEmpty = searchTextTrimmed === "";

  const { searchResults, isSearchResultsLoading } = state;
  const pageFind = usePageFind();

  async function setSearchText(newSearchText: string) {
    if (!pageFind) {
      return;
    }

    setState((previousState) => ({
      ...previousState,
      searchText: newSearchText,
      isSearchResultsLoading: true,
    }));

    const search = await pageFind.search(newSearchText);

    const pageFindResults = search.results;
    const searchResults = await Promise.all(
      pageFindResults.map(
        async (pageFindResultPromise: Promise<any>): Promise<SearchResult> => {
          const pageFindResult = await pageFindResultPromise;
          const pageFindResultData = await pageFindResult.data();

          const { meta: searchRecord } = pageFindResultData;
          const excerptUnescaped = unescape(pageFindResultData.excerpt);
          const excerptUnescapedHtml = await marked(excerptUnescaped);
          const excerptUnescapedHtmlWithoutTagsExceptMark = stripTags(
            excerptUnescapedHtml,
            "mark",
          );
          const excerptUnescapedHtmlWithoutTagsExceptMarkTrimmed = trimExcerpt(
            excerptUnescapedHtmlWithoutTagsExceptMark,
          );
          const excerpt = excerptUnescapedHtmlWithoutTagsExceptMarkTrimmed;

          return { searchRecord, excerpt };
        },
      ),
    );

    setState((previousState) => ({
      ...previousState,
      searchResults,
      isSearchResultsLoading: false,
    }));
  }

  return {
    setSearchText,
    searchResults,
    isSearchTextEmpty,
    isSearchResultsLoading,
  };
}

function trimExcerpt(excerpt: string) {
  if (!excerpt.includes("<mark>")) {
    return excerpt;
  }
  const wordsTrimmed = excerpt.split(" ").map(trim);
  const indexOfFirstMarkWord = wordsTrimmed.findIndex((word) =>
    word.startsWith("<mark>"),
  );
  const indexStart = max([indexOfFirstMarkWord - 2, 0]);
  wordsTrimmed.slice(indexStart);
  return wordsTrimmed.join(" ");
}

// Source - https://stackoverflow.com/a/66772951
// Posted by xtempore
// Retrieved 2026-09-10, License - CC BY-SA 4.0

function stripTags(html: string, ...args: readonly string[]) {
  return html
    .replace(/<(\/?)(\w+)[^>]*\/?>/g, (_, endMark, tag) => {
      return args.includes(tag) ? "<" + endMark + tag + ">" : "";
    })
    .replace(/<!--.*?-->/g, "");
}
