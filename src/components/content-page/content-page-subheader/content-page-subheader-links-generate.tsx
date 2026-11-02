import { Content, DateTimeString, checkIsNotNil } from "@/framework";

import { DateView } from "../../date";

import { ContentPageSubHeaderDate } from "./content-page-subheader-date";
import { ContentPageSubHeaderHistoryLink } from "./content-page-subheader-history-link";
import { ContentPageSubHeaderSubscribeLink } from "./content-page-subheader-subscribe-link";
import { ContentPageSubHeaderSuggestEditLink } from "./content-page-subheader-suggest-edit-link";

export interface ContentPageSubHeaderLinksParams {
  readonly content: Content;
  readonly createdDate?: DateTimeString;
  readonly updatedDate?: DateTimeString;
  readonly showHistoryLink?: boolean;
  readonly showSubscribeLink?: boolean;
  readonly showSuggestEditLink?: boolean;
}

export function generateContentPageSubHeaderLinks(
  props: ContentPageSubHeaderLinksParams,
) {
  const {
    createdDate,
    updatedDate,
    content,
    showHistoryLink = true,
    showSubscribeLink = true,
    showSuggestEditLink = true,
  } = props;

  return [
    createdDate && (
      <ContentPageSubHeaderDate key="created-date">
        <label htmlFor="article-created-date">Created: </label>
        <span id="article-created-date">
          <DateView>{createdDate}</DateView>
        </span>
      </ContentPageSubHeaderDate>
    ),
    updatedDate && (
      <ContentPageSubHeaderDate key="updated-date">
        <label htmlFor="article-updated-date">Updated: </label>
        <span id="article-updated-date">
          <DateView>{updatedDate}</DateView>
        </span>
      </ContentPageSubHeaderDate>
    ),
    showHistoryLink ? (
      <ContentPageSubHeaderHistoryLink key="history-link" content={content} />
    ) : null,
    showSubscribeLink ? (
      <ContentPageSubHeaderSubscribeLink
        key="subscribe-link"
        content={content}
      />
    ) : null,
    showSuggestEditLink ? (
      <ContentPageSubHeaderSuggestEditLink
        key="suggest-edit-link"
        content={content}
      />
    ) : null,
  ].filter(checkIsNotNil);
}
