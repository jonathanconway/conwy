import { Article } from "./article/article";
import { Book } from "./book/book";
import { Checklist } from "./checklist/checklist";
import { Colleague } from "./colleague/colleague";
import { Commentary } from "./commentary/commentary";
import { Community } from "./community/community";
import { Idea } from "./idea/idea";
import { Micro } from "./micro/micro";
import { Page } from "./page/page";
import { Project } from "./project/project";
import { Prompt } from "./prompt/prompt";
import { Quote } from "./quote/quote";
import { Study } from "./study/study";
import { Testimonial } from "./testimonial/testimonial";
import { Tool } from "./tool/tool";
import { Work } from "./work/work";

export type Content =
  | Article
  | Book
  | Checklist
  | Commentary
  | Community
  | Colleague
  | Idea
  | Micro
  | Page
  | Project
  | Prompt
  | Quote
  | Study
  | Testimonial
  | Tool
  | Work;
