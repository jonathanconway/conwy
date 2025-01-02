import { Url } from "../url";

export interface Image {
  readonly src: Url;
  readonly alt?: string;

  readonly notes: readonly {
    readonly hotspot?: {
      readonly x: string;
      readonly y: string;
    };
    readonly text: string;
  }[];
}
