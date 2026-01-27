import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "ANZ Bank",
  blurbShort:
    "Building the new ANZ Plus web banking UI, focused on critical Retail Payments features.",
  startDate: "2024-10-01",
  endDate: "2025-02-28",
  jobTitle: "Senior Frontend Engineer",
  mainImage: {
    src: "/images/works/anz/main.svg",
  },
  feedbacks: [
    {
      content: "“always prompt and well structured in everything”",
      authorTitle: "Senior Engineer",
      date: "2025-12-19",
    },
    {
      content:
        "“[Kudos to Jon for] proactively maintaining the Bluestone documentation“",
      authorTitle: "Staff Engineer",
      date: "2024-11-22",
    },
    {
      content:
        "“[Kudos to] Jon for his Ted Talk on PayId, way to set a bar so high”",
      authorTitle: "Engineering Manager",
      date: "2025-01-24",
    },
  ],
  images: [
    {
      src: "anz-plus-01.jpeg",
      title: "Login screen",
    },
    {
      src: "anz-plus-02.png",
      title: "Component library - Button",
    },
  ],
  slug: "anz",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: "react",
      items: [
        {
          itemName: "vanilla-extract",
        },
        {
          itemName: "jest",
        },
        {
          itemName: "react-testing-library",
        },
      ],
    },
    {
      categoryName: "nextjs",
      items: [
        {
          itemName: "nextjs 14-16",
        },
      ],
    },
    {
      categoryName: "typescript",
      items: [
        {
          itemName: "zod",
        },
        {
          itemName: "msw",
        },
      ],
    },
    {
      categoryName: "grpc",
      items: [
        {
          itemName: "protobuf",
        },
      ],
    },
    {
      categoryName: "monitoring",
      items: [
        {
          itemName: "honeycomb",
        },
        {
          itemName: "otel",
        },
      ],
    },
  ],
  projects: [
    { title: "Contacts List" },
    { title: "PayID over National Payments Platform (NPP)" },
    { title: "International Money Transfer (IMT)" },
    { title: "2FA Step Up for Pay to PayID" },
    { title: "Save Contact" },
    { title: "Quick Pay" },
    { title: "Sidebar User Details async loading" },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://www.anz.com.au/newsroom/media/2025/may/anz-to-introduce-password-less-web-banking-for-anz-plus/",
      title: "ANZ Plus Press Release",
    },
    {
      type: SocialLinkTypes.Website,
      url: "https://anz.com.au/",
      title: "ANZ Official Website",
    },
  ],
};
