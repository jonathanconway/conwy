import { Icon, IconTypes } from "../icon";
import { Link } from "../link";

import * as styles from "./contact-details.styles";

const CONTACTS = [
  {
    iconType: IconTypes.Email,
    label: "Email",
    href: "mailto:jon@conwy.co",
  },
  {
    iconType: IconTypes.Twitter,
    label: "Twitter",
    href: "https://twitter.com/conw_y",
  },
  {
    iconType: IconTypes.Mastodon,
    label: "Mastodon",
    href: "https://mastodon.social/@conwy",
  },
  {
    iconType: IconTypes.LinkedIn,
    label: "LinkedIn",
    href: "https://linkedin.com/in/jonathanconway",
  },
  {
    iconType: IconTypes.Telegram,
    label: "Telegram",
    href: "https://web.telegram.org/k/#@conw_y",
  },
];

export function ContactDetails() {
  return (
    <div className={styles.container}>
      {CONTACTS.map(({ iconType, label, href }) => (
        <Link key={label} href={href} className={styles.link} target="_blank">
          <Icon className={styles.linkIcon} icon={iconType} />

          {label}
        </Link>
      ))}
    </div>
  );
}
