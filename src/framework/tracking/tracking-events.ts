import { TypeOfConst } from "../utils";

export const TrackingEvents = {
  Click: "click",
};

export type TrackingEvent = TypeOfConst<typeof TrackingEvents>;
