import { MicroListItemProps } from "./micro-list-item";

export function createMicroListItemPropsMock(): MicroListItemProps {
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
