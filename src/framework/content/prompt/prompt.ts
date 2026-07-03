import { JSX } from "react";

import { Content } from "../content";

import { PromptMeta } from "./prompt-meta";

export interface Prompt extends Content<"prompt", PromptMeta> {
  readonly content: JSX.Element;
}
