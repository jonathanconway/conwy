import { Heading } from "../../heading";
import { ChecklistItem } from "../checklist-item";
import { ChecklistList } from "../checklist-list";

import { ChecklistSectionProps } from "./checklist-section-props";

export function ChecklistSection(props: ChecklistSectionProps) {
  return (
    <>
      {props.section.title && (
        <Heading level={props.section.level}>{props.section.title}</Heading>
      )}

      <ChecklistList>
        {props.section.items.map((item, itemIndex) => (
          <ChecklistItem key={itemIndex} item={item} />
        ))}
      </ChecklistList>

      {props.section.subSections.map((subSection, subSectionIndex) => (
        <ChecklistSection key={subSectionIndex} section={subSection} />
      ))}
    </>
  );
}
