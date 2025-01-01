import { MicroMeta } from "@/framework/client";

import { Date } from "../date";
import { Icon, IconTypes } from "../icon";
import { Link } from "../link";
import { LinkBox, LinkBoxTitle } from "../link-box";
import { ListItem } from "../list";
import { SocialLinksIcons } from "../social-links";

import * as styles from "./micro.css";

export interface MicroProps {
  readonly microMeta: MicroMeta;
}

export function Micro(props: MicroProps) {
  return (
    <LinkBox href={`/micros/${props.microMeta.slug}`}>
      <ListItem
        mainSlot={
          <>
            <LinkBoxTitle className={styles.date}>
              <Date>{props.microMeta.date}</Date>
            </LinkBoxTitle>

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
          </>
        }
        asideSlot={
          <>
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
          </>
        }
      />
    </LinkBox>
  );
}
