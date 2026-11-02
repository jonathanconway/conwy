import { ColleagueRelationship } from "../colleague";
import { DateString } from "../date";
import { EngagementMeta, EngagementTech } from "../engagement";
import { Image } from "../image";
import { MetaBase } from "../meta";
import { PostTag } from "../post";
import { SocialLink } from "../social-link";
import { Testimonial } from "../testimonial";

import { WorkMetaProject } from "./work-meta-project";

export interface WorkMeta extends MetaBase, EngagementMeta {
  readonly startDate: DateString;
  readonly endDate: DateString;
  readonly blurbShort: string;
  readonly client: string;
  readonly title: string;
  readonly jobTitle: string;

  readonly mainImage: Image;

  readonly images: readonly Image[];
  readonly tags: readonly PostTag[];
  readonly socialLinks: readonly SocialLink[];
  readonly techs: readonly EngagementTech[];

  readonly feedbacks: readonly Testimonial[];
  readonly projects: readonly WorkMetaProject[];
  readonly colleagueRelationships?: readonly ColleagueRelationship[];
}
