export interface BreadcrumbProps {
  readonly segments: readonly BreadcrumbSegment[];
}

export interface BreadcrumbSegment {
  readonly url?: string;
  readonly title: string;
}
