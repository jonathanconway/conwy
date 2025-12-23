import { DateTimeString } from "../date-time";
import { Image } from "../image";
import { MetaBase } from "../meta";
import { PostTag } from "../post";
import { SocialLink } from "../social-link";

import { ProjectSubType } from "./project-sub-type";

export interface ProjectMeta extends MetaBase {
  readonly type: "project";
  readonly title: string;

  readonly date: DateTimeString;

  readonly blurb?: string;
  readonly redirectUrl?: string;
  readonly subType: ProjectSubType;

  readonly mainImage: Image;

  readonly images: readonly Image[];
  readonly tags: readonly PostTag[];
  readonly socialLinks: readonly SocialLink[];
  readonly techs: readonly ProjectTech[];
  readonly platforms: readonly ProjectPlatform[];
}

export interface ProjectTech {
  readonly categoryName: string;
  readonly items: readonly {
    readonly itemName: string;
  }[];
}

export type ProjectPlatform = string;
