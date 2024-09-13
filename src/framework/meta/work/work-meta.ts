import { MetaBase } from "../meta-base";

export interface WorkMeta extends MetaBase {
  readonly startDate: string;
  readonly endDate: string;

  readonly blurbShort: string;

  readonly tags: readonly string[];

  readonly client: string;

  readonly jobTitle: string;

  readonly images: readonly WorkImage[];

  readonly techs: readonly WorkTech[];

  readonly feedbacks: readonly WorkFeedback[];

  readonly projects: readonly WorkProject[];

  readonly type: "work";
}

export interface WorkImage {
  readonly imageUrl: string;
  readonly title?: string;
  readonly notes: readonly {
    readonly hotspot?: {
      readonly x: string;
      readonly y: string;
    };
    readonly text: string;
  }[];
}

export interface WorkTech {
  readonly categoryName: string;
  readonly items: readonly {
    readonly itemName: string;
  }[];
}

export interface WorkFeedback {
  readonly quote: string;
  readonly author?: string;
  readonly date?: string;
}

export interface WorkProject {
  readonly title: string;
  readonly date?: string;
}
