"use client";

import { ActionAndModal } from "@/components/action-and-modal";

import { SearchButton } from "../search-button/search-button";
import { SearchModal } from "../search-modal";

export function SearchButtonAndModal() {
  return <ActionAndModal action={SearchButton} modal={SearchModal} />;
}
