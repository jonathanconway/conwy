import { ArticleMeta } from "../article";
import { MicroMeta } from "../micro";
import { ProjectMeta } from "../project";

export type PostMeta = ArticleMeta | MicroMeta | ProjectMeta;

export type PostMetaType = PostMeta["type"];
