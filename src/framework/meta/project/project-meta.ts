import { PostMetaBase } from "../post/post-meta-base";

export interface ProjectMeta extends PostMetaBase {
  readonly title: string;
  readonly type: "project";
  readonly redirectUrl?: string;
  readonly subType: "library" | "standard" | "tool";
  readonly images: readonly ProjectImage[];
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

export interface ProjectImage {
  readonly imageUrl: string;
  readonly title?: string;
  readonly notes: readonly {
    readonly hotspot?: {
      readonly x: string;
      readonly y: string;
    };
    readonly text: string;
  }[];
}
