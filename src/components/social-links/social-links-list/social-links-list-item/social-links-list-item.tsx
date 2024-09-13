import { SocialLink } from "@/framework/client";

import { Icon } from "../../../icon";
import { Link } from "../../../link";
import { SOCIAL_LINKS_DETAILS_BY_TYPE } from "../../social-links-details-by-type";

import * as styles from "./social-links-list-item.styles";

interface SocialLinksListItemProps {
  readonly socialLink: SocialLink;
}

export function SocialLinksListItem({ socialLink }: SocialLinksListItemProps) {
  return (
    <Link
      key={socialLink.url}
      href={socialLink.url}
      className={styles.link}
      target="_blank"
    >
      <Icon
        className={styles.linkIcon}
        icon={SOCIAL_LINKS_DETAILS_BY_TYPE[socialLink.type].iconType}
      />

      <span className={styles.linkText}>
        {socialLink.title ??
          SOCIAL_LINKS_DETAILS_BY_TYPE[socialLink.type].title}
      </span>
    </Link>
  );
}
