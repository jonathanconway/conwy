import Image from "next/image";

import { AboutMe as AboutMe_ } from "@/content/fragments";

import { Fragment } from "../fragments";

import * as styles from "./about-me.css";

export function AboutMe() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <Image
          className={styles.face}
          src="/face.png"
          alt="Jonathan's face pic"
          priority
          unoptimized={true}
          width={80}
          height={80}
        />

        <Fragment>
          <AboutMe_ />
        </Fragment>
      </div>
    </div>
  );
}
