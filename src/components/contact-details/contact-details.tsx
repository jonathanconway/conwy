import { Icon, IconTypes } from "../icon";
import { Link } from "../link";

import * as styles from "./contact-details.css";

const CONTACTS = [
  {
    iconType: IconTypes.Email,
    label: "Email",
    id: "jon@conwy.co",
    href: "mailto:jon@conwy.co",
  },
  {
    iconType: IconTypes.Twitter,
    label: "Twitter",
    id: "conw_y",
    href: "https://twitter.com/conw_y",
  },
  {
    iconType: IconTypes.Bluesky,
    label: "Bluesky",
    id: "@conwy.bsky.social",
    href: "https://bsky.app/profile/conwy.bsky.social",
  },
  {
    iconType: IconTypes.Mastodon,
    label: "Mastodon",
    id: "@conwy",
    href: "https://mastodon.social/@conwy",
  },
  {
    iconType: IconTypes.LinkedIn,
    label: "LinkedIn",
    id: "jonathanconway",
    href: "https://linkedin.com/in/jonathanconway",
  },
  {
    iconType: IconTypes.Telegram,
    label: "Telegram",
    id: "@conw_y",
    href: "https://web.telegram.org/k/#@conw_y",
  },
  {
    iconType: IconTypes.Goodreads,
    label: "Goodreads",
    href: "https://www.goodreads.com/review/list/54406240?shelf=read",
  },
];

export function ContactDetails() {
  return (
    <div className={styles.container}>
      {CONTACTS.map(({ iconType, id, label, href }) => (
        <div key={label} className={styles.item}>
          <Icon className={styles.linkIcon} icon={iconType} />
          <Link
            href={href}
            className={styles.link}
            target="_blank"
            bracketedItems={id ? [id] : []}
          >
            {label}
          </Link>
        </div>
      ))}
    </div>
  );
}
