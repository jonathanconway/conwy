import { SocialLink } from "@/framework/client";

import { Icon } from "../../icon";
import { Link } from "../../link";
import { SOCIAL_LINKS_DETAILS_BY_TYPE } from "../social-links-details-by-type";

import * as styles from "./social-links-icons.styles";

export interface SocialLinksIconsProps {
  readonly socialLinks: readonly SocialLink[];
}

export function SocialLinksIcons({ socialLinks }: SocialLinksIconsProps) {
  return (
    <div className={styles.container}>
      {socialLinks.map((socialLink) => (
        <Link
          className={styles.link}
          key={socialLink.url}
          href={socialLink.url}
          target="_blank"
          showOpenInNew={false}
          icon={SOCIAL_LINKS_DETAILS_BY_TYPE[socialLink.type].iconType}
          tooltip={{
            contents:
              socialLink.title ??
              SOCIAL_LINKS_DETAILS_BY_TYPE[socialLink.type].title,
          }}
        />
      ))}
    </div>
  );
}
