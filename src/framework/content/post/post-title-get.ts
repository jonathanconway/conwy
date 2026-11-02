import { titleCase } from "@/framework";

import { ContentTypes } from "../content-type";

import { Post } from "./post";

export function getPostTitle(post: Post) {
  switch (post.type) {
    case ContentTypes.Article:
      return post.meta.title;
    case ContentTypes.Micro:
      return post.meta.shortBlurb ?? titleCase(post.meta.slug);
  }
}
