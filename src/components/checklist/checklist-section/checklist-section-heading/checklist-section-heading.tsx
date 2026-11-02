import { kebabCase } from "lodash";

import { Heading, SectionHeading } from "../../../heading";
import { ItemsCount } from "../../../items-count";
import { SpacingSizes } from "../../../spacing";
import { SpacingContainer } from "../../../spacing";

import { ChecklistSectionHeadingProps } from "./checklist-section-heading-props";
import { CHECKLIST_SECTION_HEADING_TEXT_CLASS_NAME } from "./checklist-section-heading.const";

export function ChecklistSectionHeading(props: ChecklistSectionHeadingProps) {
  const { children, itemsCount, headingText, ...restProps } = props;

  if (itemsCount === 0) {
    return;
  }

  const headingInner = (
    <div className={CHECKLIST_SECTION_HEADING_TEXT_CLASS_NAME}>{children}</div>
  );

  const headerAfterSlot = <ItemsCount count={itemsCount} />;

  const headingOuter =
    props.level === 3 ? (
      <SectionHeading
        id={kebabCase(headingText)}
        afterSlot={headerAfterSlot}
        {...restProps}
      >
        {headingInner}
      </SectionHeading>
    ) : (
      <Heading afterSlot={headerAfterSlot} {...restProps}>
        {headingInner}
      </Heading>
    );

  return (
    <SpacingContainer marginTop={SpacingSizes.M}>
      {headingOuter}
    </SpacingContainer>
  );
}
