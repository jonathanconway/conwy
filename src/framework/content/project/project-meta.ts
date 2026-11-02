import { DateTimeString } from "../date-time";
import { EngagementMeta, ProjectPlatform } from "../engagement";
import { MetaBase } from "../meta/meta-base";

import { ProjectSubType } from "./project-sub-type";

export interface ProjectMeta extends MetaBase, EngagementMeta {
  readonly title: string;

  readonly date: DateTimeString;

  readonly blurb?: string;
  readonly redirectUrl?: string;
  readonly subType: ProjectSubType;
  readonly platforms: readonly ProjectPlatform[];
}
