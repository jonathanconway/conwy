import { ImageCascadeProps } from "./image-cascade.types";

export const IMAGE_CASCADE_PROPS_MOCK: ImageCascadeProps = {
  images: [
    {
      src: "/images/works/optus/optus-1.svg",
      alt: "Agent SubHub",
      notes: [
        {
          text: "In addition to building the whole front-end, implemented back-end calculation logic for the savings and total.",
          hotspot: {
            x: "2%",
            y: "27%",
          },
        },
        {
          text: "Implemented subscription add/remove logic on the back-end",
          hotspot: {
            x: "30%",
            y: "31%",
          },
        },
      ],
    },
    { src: "/images/works/optus/optus-2.svg", notes: [] },
    { src: "/images/works/optus/optus-3.png", notes: [] },
  ],
};
