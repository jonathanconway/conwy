import { Heading } from "../../heading";
import { PageHeaderLayout } from "../../layouts";
import { SCROLL_TO_TOP_ANCHOR_ID } from "../../scroll-to-top";

interface PageHeaderProps {
  readonly title: string;
}

export function PageHeader(props: PageHeaderProps) {
  const titleSlot = props.title ? (
    <Heading id={SCROLL_TO_TOP_ANCHOR_ID} level={2}>
      {props.title}
    </Heading>
  ) : undefined;

  const linksSlot = <></>;

  return <PageHeaderLayout titleSlot={titleSlot} linksSlot={linksSlot} />;
}
