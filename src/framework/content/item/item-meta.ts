import { ArticleMeta } from "../article";
import { ChecklistMeta } from "../checklist";
import { ProjectMeta } from "../project";
import { WorkMeta } from "../work";

export type ItemMeta = ArticleMeta | WorkMeta | ProjectMeta | ChecklistMeta;
