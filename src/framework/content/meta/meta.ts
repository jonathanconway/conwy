import { BookMeta } from "../book";
import { PostMeta } from "../post";
import { ProjectMeta } from "../project";
import { WorkMeta } from "../work";

export type Meta = PostMeta | WorkMeta | ProjectMeta | BookMeta;

export type MetaType = Meta["type"];
