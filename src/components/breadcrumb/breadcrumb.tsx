import { Link } from "../link";

import * as styles from "./breadcrumb.styles";

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
        <>
          {segment.url ? (
            <Link href={segment.url}>{segment.title}</Link>
          ) : (
            <span>{segment.title}</span>
          )}
          {segmentIndex < props.segments.length - 1 && (
            <span className={styles.arrow}>&nbsp;&gt;&nbsp;</span>
          )}
        </>
      ))}
    </div>
  );
}
