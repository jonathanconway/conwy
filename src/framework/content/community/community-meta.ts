import { DateTimeString } from "../date-time";
import { Image } from "../image";
import { Link } from "../link";
import { MetaBase } from "../meta";
import { Slug } from "../slug";
import { Url } from "../url";

export interface CommunityMeta extends MetaBase {
  readonly title: string;
  readonly url: Url;

  readonly mainImage: Image;

  readonly myProfileUrl: Url;
  readonly myPosts: readonly CommunityMetaMyPost[];
}

export interface CommunityMetaMyPost extends Link {
  readonly slug: Slug;
  readonly date: DateTimeString;

  readonly viewCount?: number;
  readonly commentCount?: number;
  readonly likeCount?: number;
}
