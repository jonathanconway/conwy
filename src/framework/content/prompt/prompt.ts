import { JSX } from "react";

import { ContentBase } from "../content-base";
import { ContentTypes } from "../content-type";

import { PromptMeta } from "./prompt-meta";

export interface Prompt
  extends ContentBase<typeof ContentTypes.Prompt, PromptMeta> {
  readonly content: JSX.Element;
}
