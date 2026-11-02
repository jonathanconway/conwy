import { createMicrosMicroRoute, microsRoute } from "@/app/routes";

import { PageMainAside } from "../../page";
import { Stack } from "../../stack";

import { MicroPageBody } from "./micro-page-body";
import { MicroPageDiscussion } from "./micro-page-discussion";
import { MicroPageSubHeader } from "./micro-page-header";
import { MicroPageProps } from "./micro-page-props";
import { MicroPageSidebar } from "./micro-page-sidebar";

export function MicroPage(props: MicroPageProps) {
  const { micro } = props;
  const microRoute = createMicrosMicroRoute(micro);

  return (
    <PageMainAside
      breadcrumbSegments={[microsRoute, { title: microRoute.title }]}
      title={microRoute.title}
      subHeaderSlot={<MicroPageSubHeader micro={props.micro} />}
      mainSlot={
        <Stack gap={1}>
          <MicroPageBody micro={micro} />

          <MicroPageDiscussion micro={props.micro} />
        </Stack>
      }
      asideSlot={<MicroPageSidebar micro={props.micro} />}
    />
  );
}
