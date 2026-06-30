import { Tree } from "../../../utils";
import { Link } from "../../link";

export interface ChecklistMetaExtensions {
  readonly items: readonly ChecklistItem[];
  readonly itemsByName: Record<string, ChecklistItem>;
  readonly tagGroups: readonly ChecklistTagGroup[];
  readonly itemsByHeadingText: Tree<string, ChecklistItem>;
}

export interface ChecklistTagGroup {
  readonly name: string;
  readonly title: string;
  readonly tags: readonly ChecklistTag[];
}

export interface ChecklistTag {
  readonly tagGroupName: string;
  readonly name: string;
  readonly title: string;
}

export interface ChecklistItem {
  readonly name: string;
  readonly title: string;
  readonly tags: readonly ChecklistTag[];
  readonly links: readonly ChecklistItemLink[];
}

export type ChecklistItemLink = Link;
