import { ReactNode } from "react";

import { IconTypes } from "../icon";
import { IconButton } from "../icon-button";
import { useTooltip } from "../tooltip/use-tooltip.hook";

import * as styles from "./copyable.css";

interface CopyableProps {
  readonly copyText?: string;
  readonly children?: ReactNode;
}

export function Copyable(props: CopyableProps) {
  const tooltip = useTooltip({
    contents: "Copy",
  });

  if (!props.copyText) {
    return props.children;
  }

  const copyText = props.copyText;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(copyText);
    tooltip.showNotification("Copied");
  };

  return (
    <div className={styles.container}>
      <div className={styles.toolbarContainer} id={tooltip.targetId}>
        <IconButton
          icon={IconTypes.Copy}
          tooltip={tooltip}
          onClick={handleCopyClick}
        />
      </div>

      {props.children}
    </div>
  );
}
