import { Link } from "../link";

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
        <>
          {segment.url ? (
            <div key={segment.title}>
              <Link href={segment.url}>{segment.title}</Link>
            </div>
          ) : (
            <div key={segment.title} className={styles.titleSegment}>
              <span>{segment.title}</span>
            </div>
          )}
          {segmentIndex < props.segments.length - 1 && (
            <span>&nbsp;&gt;&nbsp;</span>
          )}
        </>
      ))}
    </div>
  );
}
