import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "WooliesX",
  blurbShort:
    "Planned, designed and built Rubix – a Web-based UI platform for managing Woolworths deliveries.",
  startDate: "2020-02-20",
  endDate: "2024-02-20",
  jobTitle: "Lead Software Engineer",
  mainImage: {
    src: "/images/works/wooliesx/main.png",
  },
  feedbacks: [
    {
      quote:
        "“Jon has done phenomenal work on Rubix platform, i.e. developing first micro frontend platform at WooliesX. In a span of one year the Rubix platform is hosting 4 micro frontend apps and is currently used by 3 squads (Gamma, Omega and Bodega).”",
      author: "Technical Lead",
    },
  ],
  images: [
    {
      src: "wooliesx-1.png",
      title: "OTA Tracker - Deliveries grid with details sidebar",
    },
    {
      src: "wooliesx-2.png",
      title: "Street Service Time - Map with co-ordinates and details",
    },
    {
      src: "wooliesx-3.png",
      title: "Rubix Authentication - Sequence diagram",
    },
    {
      src: "wooliesx-4.png",
      title: "OTA Tracker - iPhone app prototype",
    },
  ],
  slug: "wooliesx",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: "angular",
      items: [
        {
          itemName: "leaflet",
        },
      ],
    },
    {
      categoryName: "react",
      items: [],
    },
    {
      categoryName: "nx",
      items: [],
    },
    {
      categoryName: "graphql",
      items: [
        {
          itemName: "apollo-angular",
        },
      ],
    },
    {
      categoryName: "azure",
      items: [
        { itemName: "devops" },
        { itemName: "functions" },
        { itemName: "monitor" },
      ],
    },
    {
      categoryName: "keycloak",
      items: [],
    },
    {
      categoryName: "ai",
      items: [{ itemName: "brain-js" }],
    },
  ],
  projects: [
    {
      title: "Rubix",
    },
    {
      title: "OTA Tracker",
    },
    {
      title: "Multi Carrier Config",
    },
    {
      title: "Street Service Time",
    },
    {
      title: "Rubix iOS Prototype",
    },
    {
      title: "BrainJS Suggestions Prototype",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "http://wooliesx.com.au",
      title: "WooliesX website",
    },
  ],
};
