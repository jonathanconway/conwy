import { Breadcrumb } from "../../breadcrumb";
import { Footer } from "../../footer";
import { Header } from "../../header";
import { Heading } from "../../heading";
import { SCROLL_TO_TOP_ANCHOR_ID, ScrollToTopLink } from "../../scroll-to-top";
import { Stack, StackDirections } from "../../stack";
import { TextSpacingStrategies } from "../../text";
import { PageLayout } from "../page-layout/page-layout";

import { MainAsidePageProps } from "./main-aside-page-props";
import { PageMainAsideLayout } from "./page-main-aside-layout";

export function PageMainAside(props: MainAsidePageProps) {
  return (
    <PageLayout
      headerSlot={<Header selectedNavItem={props.selectedNavItem} />}
      mainSlot={
        <>
          <PageMainAsideLayout
            mainSlot={
              <Stack direction={StackDirections.Column} gap={1}>
                {props.breadcrumbSegments && (
                  <Breadcrumb segments={props.breadcrumbSegments} />
                )}

                <Stack direction={StackDirections.Column} gap={0.5}>
                  {props.title && (
                    <Heading
                      id={SCROLL_TO_TOP_ANCHOR_ID}
                      level={2}
                      spacingStrategy={TextSpacingStrategies.Exclude}
                    >
                      {props.title}
                    </Heading>
                  )}

                  {props.subHeaderSlot}
                </Stack>

                {props.mainSlot}

                <ScrollToTopLink />
              </Stack>
            }
            asideSlot={props.asideSlot}
          />
        </>
      }
      footerSlot={<Footer />}
    />
  );
}
