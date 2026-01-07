import { SocialLink } from "@/framework/client";

import { Link } from "../../../link";
import { SOCIAL_LINKS_DETAILS_BY_TYPE } from "../../social-links-details-by-type";

import * as styles from "./social-links-list-item.css";

interface SocialLinksListItemProps {
  readonly socialLink: SocialLink;
}

export function SocialLinksListItem(props: SocialLinksListItemProps) {
  const { socialLink } = props;
  return (
    <Link
      key={socialLink.url}
      href={socialLink.url}
      className={styles.link}
      target="_blank"
      icon={SOCIAL_LINKS_DETAILS_BY_TYPE[socialLink.type].iconType}
    >
      {socialLink.title ?? SOCIAL_LINKS_DETAILS_BY_TYPE[socialLink.type].title}
    </Link>
  );
}
