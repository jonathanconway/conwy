import { ContentType, MetaBase, isNotNil } from "@/framework/client";

import { DateView } from "../../date";

import { ContentPageHeaderDate } from "./content-page-header-date";
import { ContentPageHeaderHistoryLink } from "./content-page-header-history-link";
import { ContentPageHeaderLayout } from "./content-page-header-layout";
import { ContentPageHeaderProps } from "./content-page-header-props";
import { ContentPageHeaderSubscribeLink } from "./content-page-header-subscribe-link";
import { ContentPageHeaderSuggestEditLink } from "./content-page-header-suggest-edit-link";

export function ContentPageHeader<
  T extends ContentType,
  U extends MetaBase<TMetaExtensions>,
  TMetaExtensions extends object = object,
>(props: ContentPageHeaderProps<T, U>) {
  return (
    <ContentPageHeaderLayout
      preHeader={props.preHeader}
      heading={props.title}
      links={[
        props.createdDate && (
          <ContentPageHeaderDate key="created-date">
            <label htmlFor="article-created-date">Created: </label>
            <span id="article-created-date">
              <DateView>{props.createdDate}</DateView>
            </span>
          </ContentPageHeaderDate>
        ),
        props.updatedDate && (
          <ContentPageHeaderDate key="updated-date">
            <label htmlFor="article-updated-date">Updated: </label>
            <span id="article-updated-date">
              <DateView>{props.updatedDate}</DateView>
            </span>
          </ContentPageHeaderDate>
        ),
        <ContentPageHeaderHistoryLink
          key="history-link"
          content={props.content}
        />,
        <ContentPageHeaderSubscribeLink
          key="subscribe-link"
          content={props.content}
        />,
        <ContentPageHeaderSuggestEditLink
          key="suggest-edit-link"
          content={props.content}
        />,
      ].filter(isNotNil)}
      subHeader={props.subHeader}
    />
  );
}
