import Image from "next/image";

import { ListItem } from "@/components/list";
import { TextTypes } from "@/components/text/text-type";
import { Tool as Tool_ } from "@/framework/client";

import { LinkBox, LinkBoxTitle } from "../../link-box";
import { Text } from "../../text";

import * as styles from "./tool.css";

interface ToolsProps {
  readonly tool: Tool_;
}

export function Tool({ tool }: ToolsProps) {
  return (
    <LinkBox href={tool.url} target="_blank">
      <ListItem
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
