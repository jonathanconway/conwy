import { Link } from "../../link";

export interface SectionHeadingsListItemProps {
  readonly sectionHeading: SectionHeading;
}

export interface SectionHeading {
  readonly title: string;
  readonly slug: string;
}

export function SectionHeadingsListItem(props: SectionHeadingsListItemProps) {
  const {
    sectionHeading: { title, slug },
  } = props;

  const href = `#${slug}`;

  return <Link href={href}>{title}</Link>;
}
