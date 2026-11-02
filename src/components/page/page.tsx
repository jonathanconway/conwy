import { isString } from "lodash";

import { checkIsReactNode, checkIsReactNodeElement } from "@/framework";

import { Breadcrumb } from "../breadcrumb";
import { Footer } from "../footer";
import { Header } from "../header";
import { Heading } from "../heading";
import { PageLayout } from "../layouts";
import { SCROLL_TO_TOP_ANCHOR_ID, ScrollToTopLink } from "../scroll-to-top";
import { Stack, StackDirections } from "../stack";

import { PageProps } from "./page-props";

export function Page(props: PageProps) {
  return (
    <PageLayout
      headerSlot={<Header selectedNavItem={props.selectedNavItem} />}
      mainSlot={
        <Stack direction={StackDirections.Column} gap={1}>
          {props.breadcrumbSegments && (
            <Breadcrumb segments={props.breadcrumbSegments} />
          )}

          <Stack direction={StackDirections.Column} gap={0.5}>
            {isString(props.title) && (
              <Heading id={SCROLL_TO_TOP_ANCHOR_ID} level={2}>
                {props.title}
              </Heading>
            )}
            {checkIsReactNodeElement(props.title) && props.title}

            {props.subHeaderSlot}
          </Stack>

          {props.children}

          <ScrollToTopLink />
        </Stack>
      }
      footerSlot={<Footer />}
    />
  );
}
