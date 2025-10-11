export const textExpandableOuterContainerStyles = ({
  isExpanded,
  height,
}: {
  isExpanded: boolean;
  height: string;
}) => ({ height: isExpanded ? undefined : height });
