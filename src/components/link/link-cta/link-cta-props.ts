import { Url } from "@/framework/client";

export interface LinkCtaProps {
  readonly href: string;
  readonly title: string;
  readonly description: string;
  readonly imageSrc: Url;
}
