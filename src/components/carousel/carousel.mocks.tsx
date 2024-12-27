import { CarouselProps } from "./carousel";

export function createCarouselPropsMock(): CarouselProps {
  return {
    items: [
      {
        children: <div>item one</div>,
        tooltip: {},
      },
      {
        children: <div>item two</div>,
        tooltip: {
          contents: "item two tooltip",
        },
      },
      {
        children: <div>item three</div>,
        tooltip: {
          contents: "item three tooltip",
        },
      },
    ],
  };
}
