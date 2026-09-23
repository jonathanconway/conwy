import { Book, BookMeta } from "../book";

export type CommentarySource = BookMeta & Pick<Book, "type">;
