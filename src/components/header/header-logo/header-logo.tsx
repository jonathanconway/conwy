import { Link } from "../../link";

import { HeaderLogoImage } from "./header-logo-image.svg";
import * as styles from "./header-logo.css";

export function HeaderLogo() {
  return (
    <h1 className={styles.faceAndLogoContainer}>
      <span className={styles.text}>conwy.co</span>
      <div className={styles.logoContainer}>
        <Link href="/">
          <HeaderLogoImage />
        </Link>
      </div>
    </h1>
  );
}
