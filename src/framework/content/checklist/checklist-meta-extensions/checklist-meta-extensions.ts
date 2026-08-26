import { Tree } from "../../../utils";
import { Link } from "../../link";

export interface ChecklistMetaExtensions {
  readonly items: readonly ChecklistItem[];
  readonly itemsByName: Record<string, ChecklistItem>;
  readonly tagGroups: readonly ChecklistItemTagGroup[];
  readonly itemsByHeadingText: Tree<string, ChecklistItem>;
}

export interface ChecklistItemTagGroup {
  readonly name: string;
  readonly title: string;
  readonly tags: readonly ChecklistItemTag[];
}

export interface ChecklistItemTag {
  readonly tagGroupName: string;
  readonly name: string;
  readonly title: string;
}

export interface ChecklistItem {
  readonly name: string;
  readonly title: string;
  readonly tags: readonly ChecklistItemTag[];
  readonly links: readonly ChecklistItemLink[];
}

export type ChecklistItemLink = Link;
