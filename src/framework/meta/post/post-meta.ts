import { ArticleMeta } from "../article/article-meta";
import { MicroMeta } from "../micro/micro-meta";
import { ProjectMeta } from "../project/project-meta";

export type PostMeta = ArticleMeta | MicroMeta | ProjectMeta;

export type PostMetaType = PostMeta["type"];
