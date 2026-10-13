import { TypeOfConst } from "../utils/typing";

export const TrackingEvents = {
  Click: "click",
};

export type TrackingEvent = TypeOfConst<typeof TrackingEvents>;
