"use client";

import { useState } from "react";

import { IconTypes } from "../../../icon";
import { Stack } from "../../../stack";
import { TextBox } from "../../../text-box";

import { SearchFormProps } from "./search-form-props";

export function SearchForm(props: SearchFormProps) {
  const [searchText, setSearchText] = useState("");

  function handleChange(newSearchText: string) {
    setSearchText(newSearchText);
    props.onChangeSearchText(newSearchText);
  }

  return (
    <Stack>
      <TextBox
        value={searchText}
        placeholder="Search"
        type="search"
        icon={IconTypes.Search}
        autoFocus
        onChange={handleChange}
      />
    </Stack>
  );
}
