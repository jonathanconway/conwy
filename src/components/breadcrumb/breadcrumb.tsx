import { Fragment } from "react";

import { Link } from "../link";
import { TextSizes } from "../text";

import * as styles from "./breadcrumb.css";

interface BreadcrumbProps {
  readonly segments: readonly BreadcrumbPropsSegment[];
}

interface BreadcrumbPropsSegment {
  readonly url?: string;
  readonly title: string;
}

export function Breadcrumb(props: BreadcrumbProps) {
  return (
    <div className={styles.container}>
      {props.segments.map((segment, segmentIndex) => (
        <Fragment key={segment.title}>
          {segment.url ? (
            <Link href={segment.url} size={TextSizes.XS}>
              {segment.title}
            </Link>
          ) : (
            <span className={styles.titleSegment}>{segment.title}</span>
          )}
          {segmentIndex < props.segments.length - 1 && (
            <span className={styles.chevronSegment}>&nbsp;&gt;&nbsp;</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
