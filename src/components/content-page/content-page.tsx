import { Page } from "..";

import { ContentPageProps } from "./content-page-props";

export function ContentPage(props: ContentPageProps) {
  return (
    <Page title={props.title} breadcrumbSegments={props.breadcrumbSegments}>
      {props.children}
    </Page>
  );
}
