import { JSX } from "react";

import { Content } from "../content";
import { ContentTypes } from "../content-type";

import { PromptMeta } from "./prompt-meta";

export interface Prompt
  extends Content<typeof ContentTypes.Prompt, PromptMeta> {
  readonly content: JSX.Element;
}
