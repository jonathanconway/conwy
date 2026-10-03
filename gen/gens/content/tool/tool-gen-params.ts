import { ToolSection, Url } from "@/framework";

export interface ToolGenParams {
  readonly title: string;
  readonly slug: string;
  readonly category?: string;
  readonly url?: Url;
  readonly operatingSystems?: readonly string[];
  readonly mainImage?: string;
  readonly description?: string;
  readonly usage?: string;
  readonly section: ToolSection;
}
