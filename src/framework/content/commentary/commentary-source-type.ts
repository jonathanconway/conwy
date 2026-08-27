import { TypeOfConst } from "../../utils/typing";

export const CommentarySourceTypes = {
  Book: "book",
  Study: "study",
  PodcastEpisode: "podcast-episode",
} as const;

export type CommentarySourceType = TypeOfConst<typeof CommentarySourceTypes>;
