import { Link } from "../../link";
import { SCROLL_TO_TOP_ANCHOR_ID } from "../../scroll-to-top";

import { HeaderLogoImage } from "./header-logo-image-svg";
import * as styles from "./header-logo.css";

export function HeaderLogo() {
  return (
    <h1
      className={styles.faceAndLogoContainer}
      id={SCROLL_TO_TOP_ANCHOR_ID}
      tabIndex={-1}
    >
      <span className={styles.text}>conwy.co</span>
      <Link className={styles.link} href="/">
        <HeaderLogoImage />
      </Link>
    </h1>
  );
}
