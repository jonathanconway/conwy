import Image from "next/image";

import { aboutMeFragment } from "@/content/fragments";

import { MdxWrapper } from "../mdx";
import { ResponsiveMdHalf } from "../responsive";

import * as styles from "./about-me.css";

export function AboutMe() {
  return (
    <div className={styles.outerContainer}>
      <ResponsiveMdHalf>
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

          <MdxWrapper>{aboutMeFragment.content}</MdxWrapper>
        </div>
      </ResponsiveMdHalf>
    </div>
  );
}
