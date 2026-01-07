import { DateTimeString } from "../date-time";
import { Image } from "../image";
import { Link } from "../link";
import { MetaBase } from "../meta";
import { Slug } from "../slug";
import { Url } from "../url";

import { CommunityCategory } from "./community-category";

export interface CommunityMeta extends MetaBase {
  readonly title: string;
  readonly url: Url;

  readonly mainImage: Image;

  readonly category: CommunityCategory;

  readonly profileLink?: Link;
  readonly profilePosts: readonly CommunityProfilePost[];
}

export interface CommunityProfilePost {
  readonly slug: Slug;
  readonly date: DateTimeString;
  readonly title: string;
  readonly url: Url;

  readonly viewCount?: number;
  readonly commentCount?: number;
  readonly likeCount?: number;
}
