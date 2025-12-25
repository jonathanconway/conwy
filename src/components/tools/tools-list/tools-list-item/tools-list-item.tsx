import Image from "next/image";

import { Tool as Tool_ } from "@/framework/client";

import { ContentListItem } from "../../../content-list";
import { LinkBox, LinkBoxTitle } from "../../../link-box";
import { Text } from "../../../text";
import { TextTypes } from "../../../text/text-type";

import * as styles from "./tools-list-item.css";

interface ToolsListItemProps {
  readonly tool: Tool_;
}

export function ToolsListItem(props: ToolsListItemProps) {
  return (
    <LinkBox href={props.tool.meta.url} target="_blank">
      <ContentListItem
        mainSlot={
          <>
            {props.tool.meta.mainImage && (
              <div className={styles.toolImageContainer}>
                <Image
                  src={props.tool.meta.mainImage}
                  alt={`Icon for ${props.tool.meta.title}`}
                  width={32}
                  height={32}
                  style={{ width: "auto", height: "2rem" }}
                />
              </div>
            )}

            <LinkBoxTitle>{props.tool.meta.title}</LinkBoxTitle>

            {props.tool.meta.category && (
              <Text type={TextTypes.Small}>{props.tool.meta.category}</Text>
            )}

            {props.tool.meta.description && (
              <Text>{props.tool.meta.description}</Text>
            )}

            {props.tool.meta.operatingSystems && (
              <Text type={TextTypes.Small}>
                {props.tool.meta.operatingSystems.join(", ")}
              </Text>
            )}
          </>
        }
      />
    </LinkBox>
  );
}
