import { ColleagueRelationship } from "../colleague";
import { Image } from "../image";
import { MetaBase } from "../meta";
import { SocialLink } from "../social-link";
import { Testimonial } from "../testimonial";

import { WorkMetaProject } from "./work-meta-project";
import { WorkMetaTech } from "./work-meta-tech";

export interface WorkMeta extends MetaBase {
  readonly startDate: string;
  readonly endDate: string;

  readonly blurbShort: string;

  readonly tags: readonly string[];

  readonly client: string;

  readonly jobTitle: string;

  readonly mainImage?: Image;
  readonly images: readonly Image[];

  readonly techs: readonly WorkMetaTech[];

  readonly feedbacks: readonly Testimonial[];

  readonly projects: readonly WorkMetaProject[];

  readonly socialLinks: readonly SocialLink[];

  readonly type: "work";

  readonly colleagueRelationships?: readonly ColleagueRelationship[];
}
