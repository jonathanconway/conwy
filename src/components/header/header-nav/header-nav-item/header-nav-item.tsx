"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import * as styles from "./header-nav-item.styles";

interface HeaderNavItemProps {
  readonly title: string;
  readonly href: string;
  readonly selected: boolean;
}

const HEADER_NAV_ITEM_TRACE_IMAGE_PATH_VALUE =
  "url(/images/components/header/header-nav-item/header-nav-item-trace.svg)";

export function HeaderNavItem({ title, href, selected }: HeaderNavItemProps) {
  const path = usePathname();
  const active = selected || path.startsWith(href);

  return (
    <Link className={styles.link} href={href}>
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
    </Link>
  );
}
