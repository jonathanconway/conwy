import { Breadcrumb } from "../../breadcrumb";
import { Footer } from "../../footer";
import { Header } from "../../header";
import { Heading } from "../../heading";
import { MainAsideLayout, PageLayout } from "../../layouts";
import { SCROLL_TO_TOP_ANCHOR_ID, ScrollToTopLink } from "../../scroll-to-top";
import { Stack, StackDirections } from "../../stack";
import { TextSpacingStrategies } from "../../text";

import { MainAsidePageProps } from "./main-aside-page-props";

export function MainAsidePage(props: MainAsidePageProps) {
  return (
    <PageLayout
      headerSlot={<Header selectedNavItem={props.selectedNavItem} />}
      mainSlot={
        <>
          <MainAsideLayout
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
