"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import * as styles from "./header-nav-item.css";

interface HeaderNavItemProps {
  readonly title: string;
  readonly url: string;
  readonly selected: boolean;
}

const HEADER_NAV_ITEM_TRACE_IMAGE_PATH_VALUE =
  "url(/images/components/header/header-nav-item/header-nav-item-trace.svg)";

export function HeaderNavItem({ title, url, selected }: HeaderNavItemProps) {
  const path = usePathname();
  const active = selected || path.startsWith(url);

  return (
    <Link className={styles.link} href={url}>
      <div className={styles.linkInner}>
        <span className={styles.text}>{title}</span>

        {active && (
          <div className={styles.activeIndicator}>
            <span
              className={styles.activeIndicatorLeft}
              style={{
                backgroundImage: HEADER_NAV_ITEM_TRACE_IMAGE_PATH_VALUE,
              }}
            ></span>
            <span
              className={styles.activeIndicatorRight}
              style={{
                backgroundImage: HEADER_NAV_ITEM_TRACE_IMAGE_PATH_VALUE,
              }}
            ></span>
          </div>
        )}
      </div>
    </Link>
  );
}
