import { Link } from "../../link";

import { getPodcastsList } from "./get-podcasts-list";

export function PodcastsList() {
  const podcastItems = getPodcastsList();

  return (
    <ul>
      {podcastItems.map((podcast) => (
        <li key={podcast.title}>
          <Link href={podcast.url} target="_blank">
            {podcast.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
