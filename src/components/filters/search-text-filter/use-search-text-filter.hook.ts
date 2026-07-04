"use client";

import { debounce } from "lodash";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export function useSearchTextFilter() {
  const searchParams = useSearchParams();
  const searchParamKey = "search";

  const [searchText, setSearchText] = useState(
    searchParams.get(searchParamKey) ?? "",
  );

  function handleChangeSearchText(newSearchText: string) {
    setSearchText(newSearchText);

    setTimeout(() => updateSearchParamsSearchTextDebounced(newSearchText), 500);
  }

  function updateSearchParamsSearchText_(newSearchText: string) {
    const params = new URLSearchParams(searchParams);
    if (!newSearchText.trim()) {
      params.delete(searchParamKey);
    } else {
      params.set(searchParamKey, newSearchText);
    }
    window.history.pushState(
      null,
      "",
      `?${params.toString()}${window.location.hash}`,
    );
  }

  const updateSearchParamsSearchTextDebounced = debounce(
    updateSearchParamsSearchText_,
    1000,
  );

  return {
    searchText,
    handleChangeSearchText,
  };
}
