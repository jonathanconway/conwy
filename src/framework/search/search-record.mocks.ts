import {
  createArticleMock,
  getContentLink,
  getContentUrlPath,
} from "../client";

import { SearchRecord } from "./search-record";

export function createSearchRecordMock(): SearchRecord {
  const contentMock = createArticleMock();
  return {
    contentSlug: contentMock.meta.slug,
    contentType: contentMock.type,
    contentUrl: getContentUrlPath(getContentLink(contentMock)),
    title: contentMock.meta.title,
  };
}
