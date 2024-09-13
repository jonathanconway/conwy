import { ImageCascadeProps } from "./image-cascade.types";

export const IMAGE_CASCADE_PROPS_MOCK: ImageCascadeProps = {
  images: [
    {
      imageUrl: "/images/works/optus/optus-1.svg",
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
      title: "Agent SubHub",
    },
    { imageUrl: "/images/works/optus/optus-2.svg", notes: [] },
    { imageUrl: "/images/works/optus/optus-3.png", notes: [] },
  ],
};
