import { ReactNode } from "react";

import { ChecklistTagGroup } from "@/framework/client";

import { HeadingLevel } from "../heading";

export interface ChecklistProps {
  readonly children?: ReactNode;

  readonly filterGroups?: readonly ChecklistTagGroup[];
  readonly sections: readonly ChecklistPropsSection[];
}

export interface ChecklistPropsSection {
  readonly level?: HeadingLevel;
  readonly title?: ReactNode;
  readonly items: readonly ChecklistPropsSectionItem[];
  readonly subSections: readonly ChecklistPropsSection[];
}

export interface ChecklistPropsSectionItem {
  readonly name: string;
  readonly title: ReactNode;
  readonly details: ReactNode;
  readonly tags: readonly ChecklistPropsSectionItemTag[];
  readonly links: readonly ReactNode[];
}

export interface ChecklistPropsSectionItemTag {
  readonly tag: string;
  readonly group: string;
}
