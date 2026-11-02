import { ArticleMeta } from "../article";
import { ChecklistMeta } from "../checklist";
import { ProjectMeta } from "../project";
import { WorkMeta } from "../work";

// todo: remove this, not a useful abstraction
export type ItemMeta = ArticleMeta | WorkMeta | ProjectMeta | ChecklistMeta;
