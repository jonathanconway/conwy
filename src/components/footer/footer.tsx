import { site } from "@/content";

import { Link } from "../link";
import { Stack, StackDirections } from "../stack";

import { FooterIconLinks } from "./footer-icon-links";
import * as styles from "./footer.css";
import { ThemeSwitch } from "./theme-switch";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <div>
            © {site.copyrightYear}-{currentYear} {site.owner}
          </div>
        </div>
        <div className={styles.row}>
          <Link href={site.sourceUrl} target="_blank" showOpenInNew={false}>
            Source
          </Link>
          <Link
            href={`https://wave.webaim.org/report#/${site.url}`}
            target="_blank"
            showOpenInNew={false}
          >
            WCAG
          </Link>
        </div>
      </div>
      <Stack direction={StackDirections.Row} gap={1}>
        <FooterIconLinks />
        <ThemeSwitch />
      </Stack>
    </div>
  );
}
