import { MicrosListItemProps } from "./micros-list-item";

export function createMicroListItemPropsMock(): MicrosListItemProps {
  return {
    microMeta: {
      title: "",
      blurb: `Good systems tend to have a lot of redundancy (“fall-backs”), and thus, have some inefficiency. Designers often seem to understand this better than engineers.`,
      date: "2023-09-02",
      slug: "front-end-observability",
      tags: ["software-development"],
      type: "micro",
      socialLinks: [],
    },
  };
}
