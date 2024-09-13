import { PostMeta } from "./post/post-meta";
import { ProjectMeta } from "./project/project-meta";
import { WorkMeta } from "./work/work-meta";

export type Meta = PostMeta | WorkMeta | ProjectMeta;

export type MetaType = Meta["type"];
