import { SocialLink } from "@/framework/client";

import { SocialLinksListItem } from "./social-links-list-item";
import * as styles from "./social-links-list.styles";

interface SocialLinksListProps {
  readonly socialLinks: readonly SocialLink[];
}

export function SocialLinksList({ socialLinks }: SocialLinksListProps) {
  if (!socialLinks) {
    return null;
  }

  return (
    <div className={styles.container}>
      {socialLinks.map((socialLink) => (
        <SocialLinksListItem key={socialLink.url} socialLink={socialLink} />
      ))}
    </div>
  );
}
