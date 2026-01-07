import { Icon } from "../icon";
import { Link } from "../link";

import * as styles from "./contact-details.css";
import { CONTACTS } from "./contacts";

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
