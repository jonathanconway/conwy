import { Image } from "../image";
import { MetaBase } from "../meta";
import { SocialLink } from "../social-link";
import { Testimonial } from "../testimonial";

export interface WorkMeta extends MetaBase {
  readonly startDate: string;
  readonly endDate: string;

  readonly blurbShort: string;

  readonly tags: readonly string[];

  readonly client: string;

  readonly jobTitle: string;

  readonly images: readonly Image[];

  readonly techs: readonly WorkTech[];

  readonly feedbacks: readonly Testimonial[];

  readonly projects: readonly WorkProject[];

  readonly socialLinks: readonly SocialLink[];

  readonly type: "work";
}

export interface WorkTech {
  readonly categoryName: string;
  readonly items: readonly {
    readonly itemName: string;
  }[];
}

export interface WorkProject {
  readonly title: string;
  readonly date?: string;
}
