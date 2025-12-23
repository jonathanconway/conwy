import { MetaBase } from "../meta";
import { Url } from "../url";

import { ToolSection } from "./tool-sections";

export interface ToolMeta extends MetaBase {
  readonly title: string;
  readonly category?: string;
  readonly url?: Url;
  readonly operatingSystems?: readonly string[];
  readonly mainImage?: string;
  readonly description?: string;
  readonly date: string;
  readonly usage?: string;
  readonly section: ToolSection;
}
