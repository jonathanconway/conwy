import { MouseEvent } from "react";

import { IconTypes } from "../../../icon";
import { IconButton } from "../../../icon-button";
import { useTooltip } from "../../../tooltip/use-tooltip.hook";

export function CodeSyntaxCopyButton() {
  const tooltip = useTooltip({
    contents: "Copy",
  });

  const handleCopyClick = (event: MouseEvent<HTMLButtonElement>) => {
    (
      (event.target as HTMLButtonElement)
        .closest(".code-toolbar")
        ?.querySelector("button.copy-to-clipboard-button") as HTMLButtonElement
    )?.click();
    tooltip.showNotification("Copied");
  };

  return (
    <IconButton
      icon={IconTypes.Copy}
      tooltip={tooltip}
      onClick={handleCopyClick}
    />
  );
}
