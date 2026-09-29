import { Breadcrumb } from "../../../breadcrumb";
import { ContentPageHeader } from "../../../content-page";

import { MicroPageHeaderProps } from "./micro-page-header-props";
import { generateMicroPageTitle } from "./micro-page-title-generate";

export function MicroPageHeader(props: MicroPageHeaderProps) {
  const title = generateMicroPageTitle(props.micro);

  return (
    <ContentPageHeader
      content={props.micro}
      preHeader={
        <Breadcrumb
          segments={[
            {
              title: "Micros",
              url: "/micros",
            },
            {
              title,
            },
          ]}
        />
      }
      title={title}
      updatedDate={props.micro.meta.updatedDate}
    />
  );
}
