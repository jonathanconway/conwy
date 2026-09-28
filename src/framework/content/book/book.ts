import { ContentBase } from "../content-base";
import { ContentTypes } from "../content-type";

import { BookMeta } from "./book-meta";

export interface Book extends ContentBase<typeof ContentTypes.Book, BookMeta> {}
