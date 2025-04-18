import { TypeOfConst } from "../../utils/typing";

export const NoteSourceTypes = {
  Book: "book",
  Study: "study",
  PodcastEpisode: "podcast-episode",
} as const;

export type NoteSourceType = TypeOfConst<typeof NoteSourceTypes>;
