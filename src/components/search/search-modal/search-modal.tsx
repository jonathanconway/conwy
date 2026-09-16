"use client";

import { Modal } from "../../modal";
import { SearchFormAndResults } from "../search-form-and-results";

import { SearchModalProps } from "./search-modal-props";

export function SearchModal(props: SearchModalProps) {
  return (
    <Modal title="Search" onClose={props.onClose}>
      <SearchFormAndResults />
    </Modal>
  );
}
