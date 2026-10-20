import { Stack, StackDirections } from "../../stack";

import {
  SectionHeading,
  SectionHeadingsListItem,
} from "./section-headings-list-item";

export interface SectionHeadingsListProps {
  readonly sectionHeadings: readonly SectionHeading[];
}

export function SectionHeadingsList(props: SectionHeadingsListProps) {
  return (
    <Stack direction={StackDirections.Column} gap={0.25}>
      {props.sectionHeadings.map((sectionHeading) => (
        <SectionHeadingsListItem
          key={sectionHeading.slug}
          sectionHeading={sectionHeading}
        />
      ))}
    </Stack>
  );
}
