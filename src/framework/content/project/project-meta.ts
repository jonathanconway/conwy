import { Image } from "../image";
import { PostMetaBase } from "../post";

import { ProjectSubType } from "./project-sub-type";

export interface ProjectMeta extends PostMetaBase {
  readonly title: string;
  readonly type: "project";
  readonly redirectUrl?: string;
  readonly subType: ProjectSubType;
  readonly images: readonly Image[];
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
