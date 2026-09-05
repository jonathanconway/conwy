import { Tree } from "../../../utils";
import { Link } from "../../link";

export interface ChecklistMetaExtensions {
  readonly items: readonly ChecklistItem[];
  readonly itemsByName: Record<string, ChecklistItem>;
  readonly tagGroups: readonly ChecklistItemTagGroup[];
  readonly itemsByHeadingText: Tree<string, ChecklistItem>;
  readonly sectionsByHeadingText: Record<string, ChecklistSection>;
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

export interface ChecklistSection {
  readonly contentMd: string;
  readonly noteMd: string;
}

export interface ChecklistItem {
  readonly name: string;
  readonly title: string;
  readonly contentMd: string;
  readonly tags: readonly ChecklistItemTag[];
  readonly links: readonly ChecklistItemLink[];
  readonly sectionName: string;
}

export type ChecklistItemLink = Link;
