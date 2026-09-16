import { Content } from "../content";
import { ContentTypes } from "../content-type";

import { BookMeta } from "./book-meta";

export interface Book extends Content<typeof ContentTypes.Book, BookMeta> {}
