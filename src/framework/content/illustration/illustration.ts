import { IllustrationBackground } from "./illustration-background";
import { IllustrationComposite } from "./illustration-composite";
import { IllustrationStatic } from "./illustration-static";

export type Illustration =
  | IllustrationBackground
  | IllustrationComposite
  | IllustrationStatic;
