"use client";

import { ChecklistProps } from "./checklist-props";
import { ChecklistSection } from "./checklist-section";

/**
 * Currently only used to facilitate storybook story.
 */
export function Checklist(props: ChecklistProps) {
  return (
    <>
      {props.sections.map((section, sectionIndex) => (
        <ChecklistSection key={sectionIndex} section={section} />
      ))}
      {props.children}
    </>
  );
}
