import { ContentPageSubHeader } from "../../../content-page";

import { MicroPageHeaderProps } from "./micro-page-header-props";

export function MicroPageSubHeader(props: MicroPageHeaderProps) {
  return <ContentPageSubHeader content={props.micro} />;
}
