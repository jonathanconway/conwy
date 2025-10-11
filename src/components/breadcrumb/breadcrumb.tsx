import { Link } from "../link";

import * as styles from "./breadcrumb.css";

interface BreadcrumbProps {
  readonly segments: readonly {
    readonly url?: string;
    readonly title: string;
  }[];
}

export function Breadcrumb(props: BreadcrumbProps) {
  return (
    <div className={styles.container}>
      {props.segments.map((segment, segmentIndex) => (
        <div key={segment.title}>
          {segment.url ? (
            <Link href={segment.url}>{segment.title}</Link>
          ) : (
            <span>{segment.title}</span>
          )}
          {segmentIndex < props.segments.length - 1 && (
            <span>&nbsp;&gt;&nbsp;</span>
          )}
        </div>
      ))}
    </div>
  );
}
