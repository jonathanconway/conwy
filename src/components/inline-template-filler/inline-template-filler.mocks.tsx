import { InlineTemplateFillerProps } from "./inline-template-filler.props";

export function createInlineTemplateFillerPropsMock(): InlineTemplateFillerProps {
  return {
    children: (
      <code>
        <span>Good </span>≪Morning≫<span>, </span>
        <span>≪Jon≫</span>. Hope you are well.
      </code>
    ),
  };
}
