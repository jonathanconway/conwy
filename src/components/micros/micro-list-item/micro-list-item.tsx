import { MicroMeta } from "@/framework/client";

import { Date } from "../../date";
import { Icon, IconTypes } from "../../icon";
import { Link } from "../../link";
import { SocialLinksIcons } from "../../social-links";
import { TextExpandable } from "../../text";

import * as styles from "./micro-list-item.styles";

export interface MicroListItemProps {
  readonly microMeta: MicroMeta;
}

export function MicroListItem(props: MicroListItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.mainColumn}>
        <div className={styles.date}>
          <Date>{props.microMeta.date}</Date>
        </div>

        <TextExpandable height="5rem">
          <div className={styles.blurb}>{props.microMeta.blurb}</div>

          {props.microMeta.mainLink && (
            <Link
              className={styles.mainLink}
              href={props.microMeta.mainLink}
              target="_blank"
            >
              {props.microMeta.mainLink}
            </Link>
          )}
        </TextExpandable>
      </div>
      <div className={styles.asideColumn}>
        <div className={styles.image}>
          <Icon
            icon={IconTypes.Quote}
            className={styles.iconQuote}
            size="100%"
          />
        </div>

        {props.microMeta.socialLinks && (
          <SocialLinksIcons socialLinks={props.microMeta.socialLinks} />
        )}

        <span className={styles.type}>{props.microMeta.type}</span>
      </div>
    </div>
  );
}
