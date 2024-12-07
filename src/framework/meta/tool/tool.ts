import { Url } from "../url";

import { ToolSection } from "./tool-sections";

export interface Tool {
  readonly slug: string;
  readonly title: string;
  readonly category: string;
  readonly url: Url;
  readonly operatingSystems: readonly string[];
  readonly mainImage?: string;
  readonly description?: string;
  readonly date: string;
  readonly usage?: string;
  readonly section: ToolSection;
}
