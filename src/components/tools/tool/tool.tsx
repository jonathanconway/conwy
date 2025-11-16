import Image from "next/image";

import { Tool as Tool_ } from "@/framework/client";

import { ContentListItem } from "../../content-list";
import { LinkBox, LinkBoxTitle } from "../../link-box";
import { Text } from "../../text";
import { TextTypes } from "../../text/text-type";

import * as styles from "./tool.css";

interface ToolProps {
  readonly tool: Tool_;
}

export function Tool(props: ToolProps) {
  return (
    <LinkBox href={props.tool.url} target="_blank">
      <ContentListItem
        mainSlot={
          <>
            {props.tool.mainImage && (
              <div className={styles.toolImageContainer}>
                <Image
                  src={props.tool.mainImage}
                  alt={`Icon for ${props.tool.title}`}
                  width={32}
                  height={32}
                  style={{ width: "auto", height: "2rem" }}
                />
              </div>
            )}

            <LinkBoxTitle>{props.tool.title}</LinkBoxTitle>

            {props.tool.category && (
              <Text type={TextTypes.Small}>{props.tool.category}</Text>
            )}

            {props.tool.description && <Text>{props.tool.description}</Text>}

            {props.tool.operatingSystems && (
              <Text type={TextTypes.Small}>
                {props.tool.operatingSystems.join(", ")}
              </Text>
            )}
          </>
        }
      />
    </LinkBox>
  );
}
