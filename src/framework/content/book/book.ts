import { Content } from "../content";

import { BookMeta } from "./book-meta";

export interface Book extends Content<"book", BookMeta> {}
