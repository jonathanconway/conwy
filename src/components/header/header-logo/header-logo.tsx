import { Link } from "../../link";

import { HeaderLogoImage } from "./header-logo-image.svg";
import * as styles from "./header-logo.styles";

export function HeaderLogo() {
  return (
    <h1 className={styles.faceAndLogoContainer}>
      <span className={styles.text}>conwy.co</span>
      <div className={styles.logoContainer}>
        <Link
          href="/"
          tooltip={{ contents: "Click to go home", style: styles.tooltip }}
        >
          <HeaderLogoImage />
        </Link>
      </div>
    </h1>
  );
}
