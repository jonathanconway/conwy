"use client";

import { ReactNode, useRef } from "react";

import { Icon, IconTypes } from "../../icon";

import * as styles from "./header-hamburger.css";

//  todo: rename to header-menu

interface HeaderHamburgerProps {
  readonly children?: ReactNode;
}

export function HeaderHamburger(props: HeaderHamburgerProps) {
  const headerHamburgerInputRef = useRef<HTMLInputElement>(null);

  const handleHambergerMenuBackdropClick = () => {
    headerHamburgerInputRef.current?.click();
  };

  return (
    <>
      <input
        ref={headerHamburgerInputRef}
        className={styles.hiddenCheckbox}
        aria-hidden="true"
        type="checkbox"
        id="header-hamburger"
      />

      <label htmlFor="header-hamburger">
        <Icon
          icon={IconTypes.HamburgerMenu}
          className={styles.icon}
          size="2rem"
        />
      </label>

      {/* todo: find a way to make this a part of the input rather than using js */}
      <div
        className={styles.menuBackdrop}
        onClick={handleHambergerMenuBackdropClick}
      ></div>

      <div className={styles.contents}>{props.children}</div>
    </>
  );
}
