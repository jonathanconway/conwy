import { flow, orderBy } from "lodash";

import * as podcastsMap from "@/content/podcasts";
import { Podcast } from "@/framework/client";

export function getPodcastsList(): readonly Podcast[] {
  const podcasts = Object.values(podcastsMap);

  return flow(sortPodcasts)(podcasts);
}

function sortPodcasts(podcasts: readonly Podcast[]) {
  const podcastsSorted = orderBy(podcasts, "title");

  return podcastsSorted;
}
