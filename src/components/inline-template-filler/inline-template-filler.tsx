import { useEffect, useRef } from "react";

import { mountInlineTemplateFiller } from "./inline-template-filler-mount";
import * as styles from "./inline-template-filler.css";
import { InlineTemplateFillerProps } from "./inline-template-filler.props";

export function InlineTemplateFiller(props: InlineTemplateFillerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      mountInlineTemplateFiller(containerRef.current.children[0]);
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      {props.children}
    </div>
  );
}
