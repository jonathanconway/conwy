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
  const {
    preHeader,
    title,
    createdDate,
    updatedDate,
    content,
    showHistoryLink = true,
    showSubscribeLink = true,
    showSuggestEditLink = true,
    subHeader,
  } = props;

  return (
    <ContentPageHeaderLayout
      preHeader={preHeader}
      heading={title}
      links={[
        createdDate && (
          <ContentPageHeaderDate key="created-date">
            <label htmlFor="article-created-date">Created: </label>
            <span id="article-created-date">
              <DateView>{createdDate}</DateView>
            </span>
          </ContentPageHeaderDate>
        ),
        updatedDate && (
          <ContentPageHeaderDate key="updated-date">
            <label htmlFor="article-updated-date">Updated: </label>
            <span id="article-updated-date">
              <DateView>{updatedDate}</DateView>
            </span>
          </ContentPageHeaderDate>
        ),
        showHistoryLink ? (
          <ContentPageHeaderHistoryLink key="history-link" content={content} />
        ) : null,
        showSubscribeLink ? (
          <ContentPageHeaderSubscribeLink
            key="subscribe-link"
            content={content}
          />
        ) : null,
        showSuggestEditLink ? (
          <ContentPageHeaderSuggestEditLink
            key="suggest-edit-link"
            content={content}
          />
        ) : null,
      ].filter(isNotNil)}
      subHeader={subHeader}
    />
  );
}
