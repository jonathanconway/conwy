import { CarouselProps } from "./carousel";

export function createCarouselPropsMock(): CarouselProps {
  return {
    items: [
      {
        title: "item one",
      },
      {
        title: "item two",
      },
      {
        title: "item three",
      },
    ],
    renderBody: () => <></>,
  };
}
