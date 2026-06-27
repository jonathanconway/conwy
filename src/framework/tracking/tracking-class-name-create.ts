import { TrackingEvent } from "./tracking-events";

export function createTrackingClassName(event: TrackingEvent, label: string) {
  return `tracking-${event} ${label}`;
}
