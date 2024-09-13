import { PostMeta } from "./post-meta";

export interface Post<TMeta extends PostMeta = PostMeta> {
  readonly meta: TMeta;
}
