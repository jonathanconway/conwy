"use client";

import { ButtonAppearances } from "../../button";
import { IconTypes } from "../../icon";
import { IconButton } from "../../icon-button";

import { SearchButtonProps } from "./search-button-props";

export function SearchButton(props: SearchButtonProps) {
  return (
    <IconButton
      appearance={ButtonAppearances.None}
      icon={IconTypes.Search}
      aria-label="Search"
      tooltip={{ contents: "Search" }}
      onClick={props.onClick}
    />
  );
}
