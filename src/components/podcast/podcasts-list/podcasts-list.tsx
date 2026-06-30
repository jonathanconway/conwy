import { Link } from "../../link";
import { ListItem, UnorderedList } from "../../list";

import { getPodcastsList } from "./get-podcasts-list";

export function PodcastsList() {
  const podcastItems = getPodcastsList();

  return (
    <UnorderedList>
      {podcastItems.map((podcast) => (
        <ListItem key={podcast.title}>
          <Link href={podcast.url} target="_blank">
            {podcast.title}
          </Link>
        </ListItem>
      ))}
    </UnorderedList>
  );
}
