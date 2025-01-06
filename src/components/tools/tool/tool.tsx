import Image from "next/image";

import { Tool as Tool_ } from "@/framework/client";

import { ContentListItem } from "../../content-list";
import { LinkBox, LinkBoxTitle } from "../../link-box";
import { Text } from "../../text";
import { TextTypes } from "../../text/text-type";

import * as styles from "./tool.css";

interface ToolsProps {
  readonly tool: Tool_;
}

export function Tool({ tool }: ToolsProps) {
  return (
    <LinkBox href={tool.url} target="_blank">
      <ContentListItem
        mainSlot={
          <>
            {tool.mainImage && (
              <div className={styles.toolImageContainer}>
                <Image
                  src={tool.mainImage}
                  alt={`Icon for ${tool.title}`}
                  width={32}
                  height={32}
                  style={{ width: "auto", height: "2rem" }}
                />
              </div>
            )}

            <LinkBoxTitle>{tool.title}</LinkBoxTitle>

            <Text type={TextTypes.Small}>{tool.category}</Text>

            {tool.description && <Text>{tool.description}</Text>}

            <Text type={TextTypes.Small}>
              {tool.operatingSystems.join(", ")}
            </Text>
          </>
        }
      />
    </LinkBox>
  );
}
