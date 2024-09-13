import Image from "next/image";

import { AboutMe as AboutMe_ } from "@/content/fragments";

import { Fragment } from "../fragments";

import moduleStyles from "./about-me.module.css";

export function FragmentsAboutMe() {
  return (
    <div className={moduleStyles.container}>
      <Image
        className={moduleStyles.face}
        src="/face.png"
        alt="Jonathan's face pic"
        priority
        unoptimized={true}
        width="100"
        height="100"
      />

      <Fragment>
        <AboutMe_ />
      </Fragment>
    </div>
  );
}
