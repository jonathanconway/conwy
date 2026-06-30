import { LinkCtaProps } from "./link-cta-props";

export function createLinkCtaMocks(): LinkCtaProps {
  return {
    title: "Front End Development Checklist",
    description:
      "Covers common front end development concerns. Includes front end frameworks and languages, and non-functional requirements such as accessibility and security.",
    href: "/checklists/front-end-development-checklist",
    imageSrc: "/images/articles/front-end-development-checklist/main.png",
  };
}
