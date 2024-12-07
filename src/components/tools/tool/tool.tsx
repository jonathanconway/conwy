import Image from "next/image";

import { Tool as Tool_ } from "@/framework";

import { LinkBox, LinkBoxTitle } from "../../link-box";

import * as styles from "./tool.styles";

interface ToolsProps {
  readonly tool: Tool_;
}

export function Tool({ tool }: ToolsProps) {
  return (
    <LinkBox className={styles.toolLinkBox} href={tool.url} target="_blank">
      {tool.mainImage && (
        <div className={styles.toolImageContainer}>
          <Image
            className={styles.toolImage}
            src={tool.mainImage}
            alt={`Icon for ${tool.title}`}
            width={32}
            height={32}
            style={{ width: "auto", height: "2rem" }}
          />
        </div>
      )}

      <LinkBoxTitle>{tool.title}</LinkBoxTitle>

      <small>{tool.category}</small>

      {tool.description && <p>{tool.description}</p>}

      <p>
        <small>{tool.operatingSystems.join(", ")}</small>
      </p>
    </LinkBox>
  );
}
