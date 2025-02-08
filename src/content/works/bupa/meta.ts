import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "Bupa",
  blurbShort:
    "Led a team of 5-6 web developers on the a rebuild of Bupa’s online presence.",
  startDate: "2010-06-01",
  endDate: "2011-02-01",
  jobTitle: "Technical Lead",
  mainImage: {
    src: "/images/works/bupa/main.svg",
  },
  feedbacks: [
    {
      content:
        "“Jonathan was an enthusiastic Technical Lead pushing new exciting technologies, setting up strong standards and provided clear directions on tasks.”",
      authorTitle: "Developer",
      date: "2011-06-27",
      linkedInUrl:
        "https://www.linkedin.com/in/jonathanconway/details/recommendations",
    },
    {
      content:
        "“Jonathan strived to provide the team with easy to use development environments, documented processes and clear direction on tasks. Great Technical Lead I'd enjoy working with again.”",
      authorTitle: "Senior Developer",
      date: "2011-06-03",
      linkedInUrl:
        "https://www.linkedin.com/in/jonathanconway/details/recommendations",
    },
    {
      content:
        "“Jonathan was a great front-end developer/lead. He not only helped establish the front-end development team, but also set the direction and standards. Full of initiative and great ideas, Jonathan made a great and valuable contribution to the team.”",
      authorTitle: "Delivery Manager",
      date: "2011-05-23",
      linkedInUrl:
        "https://www.linkedin.com/in/jonathanconway/details/recommendations",
    },
  ],
  images: [
    {
      src: "bupa-01.jpg",
      title: "Bupa website - Cover comparison tool",
    },
    {
      src: "bupa-02.jpg",
      title: "Bupa website - Quick quote tool",
    },
  ],
  slug: "bupa",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: "HTML",
      items: [],
    },
    {
      categoryName: "CSS",
      items: [],
    },
    {
      categoryName: "Javascript",
      items: [
        {
          itemName: "jQuery",
        },
      ],
    },
    {
      categoryName: "Vignette CMS",
      items: [],
    },
    {
      categoryName: "Java",
      items: [
        {
          itemName: "Spring",
        },
        {
          itemName: "JSP",
        },
        {
          itemName: "Maven",
        },
      ],
    },
    {
      categoryName: "Mercurial",
      items: [],
    },
  ],
  projects: [
    {
      title: "Bupa Web Transformation",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://www.bupa.com.au",
      title: "Bupa website",
    },
    {
      type: SocialLinkTypes.Website,
      url: "https://web.archive.org/web/20111204051308/http://www.bupa.com.au/",
      title: "'Get a Quote' feature",
    },
  ],
};
