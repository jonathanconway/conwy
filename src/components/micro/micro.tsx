import { MicroMeta } from "@/framework/client";

import { Date } from "../date";
import { Icon, IconTypes } from "../icon";
import { Link } from "../link";
import { SocialLinksIcons } from "../social-links";

import * as styles from "./micro.styles";

export interface MicroProps {
  readonly microMeta: MicroMeta;
}

export function Micro(props: MicroProps) {
  return (
    <div className={styles.container}>
      <div className={styles.mainColumn}>
        <Link className={styles.date} href={`/micros/${props.microMeta.slug}`}>
          <Date>{props.microMeta.date}</Date>
        </Link>

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
